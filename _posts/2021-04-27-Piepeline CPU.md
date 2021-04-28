---
layout: posts
title: Pipeline CPU, 주요 3 가지
category: category
tags: [computer architecture, computer science, pipeline, cpu]
---

## Pipleline CPU 개념 정리

---

Pipeline CPU를 design & implement 하기 전에, Pipeline CPU의 구조를 먼저 충분히 이해하는 것이 중요할 것 같습니다.  
Pipeline CPU는 이전에 배웠던 Single-cycle CPU, Multi-cycle CPU 에 비해서 같은 cycle 시간 동안 더 많은 instruction을 수행할 수 있 수 있습니다.

어떠한 특성들 때문에 이러한 효율이 가능한 것일까요?  
그리고 구현 상에 어떠한 점을 주의해야 할까요?

### 세가지 주요 사항

1. Data Hazard
2. Control Hazard
3. Branch Prediction

---

RAW Hazard 조건

- I(young) => R/I, LD, SD, Bxx, JALR // Read Instruction
- I(old) => R/I, LD, JAL, JALR // Write
- dis(I OLD, I YOUNG) <= dis(ID, WB) = 3 // dist 가 3 이상인 경우는 hazard가 발생하지 않으므로
  write(old instructiion) 보다 read(young instruction)이 먼저 수행될경우 hazard가 발생한다.
