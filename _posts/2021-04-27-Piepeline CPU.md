---
layout: posts
title: Pipeline CPU- Data Hazard
comments: true
category: category
tags: [computer architecture, computer science, pipeline, cpu]
---

Pipeline CPU를 design & implement 하기 전에, Pipeline CPU의 특성들을 먼저 충분히 이해하는 것이 중요할 것 같습니다.  
Pipeline CPU는 이전에 배웠던 Single-cycle CPU, Multi-cycle CPU 에 비해서 같은 cycle 시간 동안 더 많은 instruction을 수행할 수 있습니다.

어떠한 특성들 때문에 이러한 효율이 가능한 것일까요?  
그리고 구현 상에 어떠한 점을 주의해야 할까요?

### 세가지 주요 사항

1. Data Hazard
2. Control Hazard
3. Branch Prediction

---

이번 Post에서는 위의 세가지 주요 특징들 중에서도  
**1. Data Hazard**
를 해결하는 방법에 대해 구체적으로 알아 봅니다.

### RAW Hazard 조건

우선 WAR이나 WAW의 경우, Pipeline CPU에서 instruction의 실행 순서상 read 가 IF/ID에서 항상 먼저 실행된 다음에 Write가 되기 때문에 Instruction에 방해되는 요소가 아니므로 고려하지 않습니다.

하지만 **RAW**의 경우는 **Write를 먼저하고 Read를 꼭 해야하기 때문에**, write 가 되기도 전에 IF/ID에서 read를 할 경우 문제가 발생하므로 이 경우를 해결해 주어야 합니다.

```c
//RAW Hazard 발생 조건
//write(old instructiion) 보다 read(young instruction)가 먼저 수행될경우 hazard가 발생한다.
- I(young) => R/I, LD, SD, Bxx, JALR // Read Instruction
- I(old) => R/I, LD, JAL, JALR // Write
- dis(I_OLD, I_YOUNG) <= dis(ID, WB) = 3 // dist 가 3 보다 큰 경우는 hazard가 발생하지 않으므로 3 이하인 경우만 고려
```

### Data Forwarding Logic

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/116329894-40c7b780-a807-11eb-8e9e-7580d0685266.png" width="400"><br>Feature1. Forwarding diagram
</p>
```c++
if(rs1_EX != 0) && (rs1_EX == rd_MEM) && RegWrite_MEM then
forward operand from MEM stage // dist=1
else if(rs_EX != 0) && (rs_EX == rd_WB) && RegWrite_WB then
forward operand from WB stage // dist=2
else
use the operand from register file //dist=3
```

(마찬가지로 rs2에도 위의 forwarding logic을 수행하면 된다.)

**Data Forwarding** 을 이해하는데 필요한 다음의 두가지 세부 사항을 한번 살펴보자.

---

**1. 가장 최근의 값을 먼저 Forwarding 해주어야 한다.**  
**2. use_rs1(IR_ID)는 왜 확인할 필요가 없을까?**

---

### 1. 가장 최근의 값을 먼저 Forwarding 해주어야 한다.

다음의 예시의 경우를 한 번 살펴보자

```c
sub x2, x1, x3
add x2, x2, x5 // 1, 2번째와 RAW(x2)
add x4, x2, x7 // 2, 3번째와 RAW(x2)
```

위의 예시와 같은 경우에 만약 3번째 줄을 수행할 때,  
**Data forwarding**을 **dist=1 보다 dist=2를** 먼저 수행한다고 가정하여 보자.  
**올바른 계산은 3번째 줄에게 가장 최근인 add를 한 결과를 x2가 받아와야 할 것이다.**  
하지만, add를 수행하기 전인 **sub의 결과로 부터 x2**를 읽어오는 forwarding을 수행하기 때문에 올바른 결과값을 갖지 못하게 된다!

따라서
위의 **Data Forwarding Logic**에서 확인할 수 있듯이, dist가 적은 1,2,3 즉 가장 가까운 값으로 부터 forwarding을 수행해주어야한다.

### 2. use_rs1(IR_ID)는 왜 확인할 필요가 없을까?

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/116332847-77a0cc00-a80d-11eb-897e-b41e4905fd52.png" width="400"><br>Feature2. Stall Condition
</p>
 pipeline CPU를 수행하는데 있어서 Data Hazard 문제를 해결하기 위해 Stall 하는 방법이 있었다.
Stall의 조건에는 **use_rs(IR_ID)** 를 통해 아직 Write 되지 않은 값을 ID에 넣어주는 지를 확인한다.

하지만 Data Forwarding 에서는 **ID 단계를 Bypass** 하고 EX에 바로 값을 forwarding 해주기 때문에 use_rs(IR_ID)가 더이상 필요없을 것이다.

---

### Data forwarding으로 모든 instruction(RAW)을 해결할 수 있을까?

```c
ld x2, x3, x4
add x6, x2, x7 // RAW(x2)
sub x8, x9, x10
```

위의 경우 add에서 dist=1 이므로 data forwarding을 해주면 되지만 **LD instruction**이기 때문에 문제가 발생한다.  
LD instruction의 경우, ALU로 부터 계산된 값이 아닌 **메모리를 Read 한 값을 Forwarding** 해주어야 하므로 **dist=1**일때 한 번의 STALL을 필요로 한다.

따라서 DataForwarding Logic과 함께 다음의 stall 조건을 필요로 한다.

```c
//Stall
if([(rs1_ID == rd_EX) && use_rs1(IR_ID) || (rs2_ID == rd_EX) && use_rsw(IR_ID)]
&& MemRead_EX) then stall
//MemRead_EX : op=LD/LW/...
```

---

## 전체적인 구현 Design

RAW Hazard를 고려한 Data Forwarding 구현은 다음과 같습니다.

1. Data forwarding
2. Hazard Detection(LD의 경우, STALL)

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/116356232-f90c5480-a835-11eb-8979-b49dd1ad6250.png" width="700"><br>Feature3. Pipeline CPU design(Data Forwarding)
</p>
