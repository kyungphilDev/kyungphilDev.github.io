---
layout: posts
title: 파이썬 f-문자열
comments: true
category: python
tags: [python, programming]
---

### f-문자열

파이썬 3.6 이상 버전에서부터는 f-문자열을 사용하여 여러 변수들을 문자열의 형태로 쉽고 편하게 출력이 가능합니다.

사용 방법은 간단합니다.

- 첫 인용 부호 앞에 문자 f를 입력합니다.
- 변수 명이나 식을 중괄호 안에 포함하여 문자열에 넣어줍니다.

> 예시: **f'abcdefg. {변수명}'**
>
> **day=27**  
>  **print(f'오늘은 {day}일 입니다')**  
> 출력 결과: 오늘은 27일 입니다

문제를 통해 직접 적용을 하는 것이 개념을 쉽게 익히는 방법이므로 다음 문제를 함께 풀어봅시다.

### [백준 9610번](https://www.acmicpc.net/problem/9610)

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/125071561-679e4600-e0f4-11eb-9905-442bd3c969a9.png" width="800"><br>9610번 문제
</p>
문제는 정말 간단합니다.  
입력받은 좌표들이 어떤 사분면에 해당하는지를 표현하는 문제 입니다. 각 사분면마다 해당하는 좌표의 개수를 알맞게 출력해주면 됩니다.  
f-문자열의 방식을 적용하여 문제를 한 번 풀어봅시다. 먼저 아래의 코드를 보면서 f-문자열 사용의 예시를 살펴봅시다.

```python
import sys
#sys.stdin.readline()은 input()과 같은 역할을 한다고 생각하시면됩니다.
a = int(sys.stdin.readline().rstrip())
q1, q2, q3, q4, axis = 0, 0, 0, 0, 0
for i in range(a):
    b, c = map(int, sys.stdin.readline().rstrip().split())
    if(b == 0 or c == 0):
        axis += 1
    elif(b > 0 and c > 0):
        q1 += 1
    elif(b < 0 and c > 0):
        q2 += 1
    elif(b < 0 and c < 0):
        q3 += 1
    elif(b > 0 and c < 0):
        q4 += 1
print(f'Q1: {q1}\nQ2: {q2}\nQ3: {q3}\nQ4: {q4}\nAXIS: {axis}')
```

## 예제 출력

**Q1: 2**  
**Q2: 0**  
**Q3: 0**  
**Q4: 1**  
**AXIS: 2**

위와 같은 예제 출력을 완성시키기 위해서는 **변수 q1, q2, q3, ... 들을** 알맞게 문자열에 입력해 주어야 합니다.  
하지만 **int형 변수들을 str의 형태**로 넣어주기 간혹 번거로운 부분이 있습니다.
따라서 이때, f-문자열의 방식을 적용한다면 **C/C++**에서는 경험할 수 없었던 매우 편한 방법으로 출력을 할 수가 있습니다.

만약 C/C++ 의 방식이었다면,

```c
printf("Q1: %d\n Q2: %d\n...(생략)",q1,q2,...(생략));
```

이와 같은 방법으로 입력을 해야합니다.

하지만 **javascript**와 비슷한 방식으로 **Python**에서는 **f-문자열**을 제공한다는 것을 알아둡시다.

---

**Post의 참고자료와 이미지의 출처는 아래와 같습니다.**

> 처음 시작하는 파이썬[2판], 한빛미디어, 빌루바노빅  
> 백준 9610번, https://www.acmicpc.net/problem/9610

---
