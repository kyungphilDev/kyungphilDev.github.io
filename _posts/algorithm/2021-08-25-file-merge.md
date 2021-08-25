---
layout: posts
title: 11066번 파일 합치기(다이내믹 프로그래밍)
comments: true
category: coding-test
tags: [algorithm, coding-test, python, programming]
---

**다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄보도록 합시다.**

관련 문제)

- <a  href='https://www.acmicpc.net/problem/10942'>10942 팰린드롬</a>
- <a  href='https://www.acmicpc.net/problem/12865'>12865 평범한 배낭</a>

---

### 백준) 파일 합치기(11066번)

<a  href='https://www.acmicpc.net/problem/11066'>파일 합치기</a>

- 문제 설명: 챕터마다 파일크기가 주어집니다. 연속을 유지하며 파일을 모두 합치는데 필요한 최소 비용을 구하시오.  
  **(파일 챕터가 뒤죽박죽 섞이게 할 수 없습니다.)**  
  예를 들어, C1, C4 는 파일을 합칠 수가 없습니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/130772643-634bd113-70a3-4c05-8367-551e4a9aa24c.png" width="1000"><br>문제 설명
</p>

문제에서 챕터의 크기(K)는 최대 500 입니다.  
**DP**를 활용하여 문제를 접근할 것이므로 **점화식의 정의**를 우선 세워봅시다.

### d[i][j]를 i부터 j 챕터까지의 파일 합치기 최소비용이라고 정의 합시다.

그렇다면 d[i][j]는 다음의 방식으로 다르게 표현이 가능합니다.

- 챕터예시) **abcdef** (K=5)
- **d[0][4]** = **(a)(bcdef) , (ab)(cdef), (abc)(def), (abcd)(ef), (abcde)(f)** 중에서 **최소값** + **각 장수의 총 합(a+b+c+d+e+f)**
- () 괄호안에 든 배열은 d[][]를 의미합니다.
- 즉 (ab)(cdef) 는 **d[0][1]+d[2][4]** 를 의미합니다.

위의 정의 방식으로 최대 500 까지의 많은 챕터들을 더 작게 작게 줄여나가면서 답을 찾아나갈 수 있습니다.  
**가장 작은 경우는 다음의 경우 입니다.(종결조건)**

- `d[i][i] = 0`
- `d[i][i+1] = a[i](i번째 챕터 크기)+ a[i+1](i+1번째 챕터 크기)`

위의 점화식의 정의에 따라 Top-down, Bottom-Up 두가지 방식으로 코드를 구현하여 보겠습니다.

> **구현 과정: 첫 번째**
> Top-down 방식

```python
def go(i, j):
    if i == j:
        return 0
    if d[i][j] != -1:
        return d[i][j]
    ans = d[i][j]
    for k in range(i, j):
        tmp = go(i, k)+go(k+1, j)+sum(a[i:j+1])
        if ans == -1 or ans > tmp:
            ans = tmp
    d[i][j] = ans
    return ans
```

> **구현 과정: 두 번째**
> Bottom-UP 방식

```python
d=[[-1]*k for i in range(k)]
# 길이가 1 일 때
for i in range(k):
  d[i][i]=0
# 길이가 2 일 때
for i in range(k-1):
  d[i][i+1]=a[i]+a[i+1]
# 길이가 3~k 일 때
for l in range(3,k+1):
  for i in range(k-l+1):
    j=i+l-1
    tmp=-1 # d[i][j]의 여러 후보들 중에서 최소값을 저장하는데 필요한 변수
    for t in range(i,j):
      if tmp==-1 or tmp > d[i][t]+d[t+1][j]:
        tmp = d[i][t]+d[t+1][j]
    d[i][j]=tmp+sum(a[i:j+1])
print(d[0][k-1])
```

---

### 문제의 설명이 잘 이해가 되지 않는다면 비슷한 구조의 코드를 가진 팰린드롬 문제를 먼저 한 번 풀어보세요.

관련 문제 및 포스트)

- <a  href='https://www.acmicpc.net/problem/10942'>10942 팰린드롬\_백준</a>
- <a  href='https://kyungphildev.github.io/coding-test/palindrome-copy/'> 이전 포스트) 10942번 펠린드롬(다이내믹 프로그래밍)</a>

---

### Top-Down 과 Bottom-Up 어떤 방식으로 구현하는 것이 좋은가요?

제가 생각하기에 **자신이 가장 구현하기 편하며 실수를 줄일 수 있는 접근 방식**이 가장 좋은 풀이라고 생각합니다.

### 단 문제의 시간복잡도 안에 구현이 가능한 방법이어야만 합니다.

아무리 가독성이 좋고 구현하기 쉬운 코드라 하더라도 **시간복잡도**가 너무나 초과하는 코드라면 **효율적인 알고리즘**을 적용하는 것에 대해 더욱 고민하여야 합니다.

이 문제와 같은 경우는 **Top-Down 방식**의 코드로 백준에 제출을 하면 Python의 경우 **시간초과 오류**가 발생합니다.  
그 이유는, 이 문제는 **Top-Down 의 메모이제이션**이 크게 효과를 내지 못하며, **너무 깊게 재귀함수**가 반복되며 테스트 데이터 T의 값이 커질 수록 시간이 많이 소요하는 것이라 생각합니다. 따라서, **메모이제이션**이 잘 되지 않는 문제의 경우에는 **Bottom-Up** 방식을 사용하는 것이 좋습니다. 종결 조건에서부터 시작하여 최종 답을 찾을 때까지 하나씩 진행되는 방식이기 때문에 시간복잡도가 줄기 때문입니다.

> 전체 구현 코드

```python
import sys
def input(): return sys.stdin.readline().rstrip()

t = int(input())
for _ in range(t):
    k = int(input())
    a = list(map(int, input().split()))
    d = [[-1]*k for i in range(k)]
    # 길이가 1 일 때
    for i in range(k):
        d[i][i] = 0
    # 길이가 2 일 때
    for i in range(k-1):
        d[i][i+1] = a[i]+a[i+1]
    # 길이가 3~k 일 때
    for l in range(3, k+1):
        for i in range(k-l+1):
            j = i+l-1
            tmp = -1  # d[i][j]의 여러 후보들 중에서 최소값을 저장하는데 필요한 변수
            for t in range(i, j):
                if tmp == -1 or tmp > d[i][t]+d[t+1][j]:
                    tmp = d[i][t]+d[t+1][j]
            d[i][j] = tmp+sum(a[i:j+1])
    print(d[0][k-1])
```
