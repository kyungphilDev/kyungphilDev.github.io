---
layout: posts
title: 10942번 펠린드롬(다이내믹 프로그래밍)
comments: true
category: coding-test
tags: [algorithm, coding-test, python, programming]
---

**다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄보도록 합시다.**

관련 문제)

- <a  href='https://www.acmicpc.net/problem/11066'>11066번 파일합치기</a>
- <a  href='https://www.acmicpc.net/problem/12865'>12865번 평범한배낭</a>

---

### 백준) 배열 돌리기 3(16935번)

<a  href='https://www.acmicpc.net/problem/10942'>팰린드롬\_백준</a>

- 문제 설명: 길이가 n인 수열이 주어졌을 때, 임의의 시작점과 끝점에 대해서 팰린드롬을 만족하는지 확인하는 문제입니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/80669616/130726726-d23b4326-1f41-44fe-943d-981b5cacc0ff.png" width="1000"><br>문제 설명
</p>

문제에서 수열의 크기(N)는 최대 2000이며, 질문의 개수(M)는 1,000,000개 입니다.  
가장 쉽게 떠오르는 풀이(s,e 범위를 하나씩 확인하는 방법)의 시간복잡도를 미리 계산하여 봅시다.

- 일반적인 팰린드롬 확인 시간복잡도: O(N)
- 질문의 개수: O(M)
- 전체 구현 시간복잡도: O(N\*M)

어림잡아도 **1억 번** 이상의 연산을 수행해야하므로 문제의 **시간제한 0.5**초안에 해결할 수 없는 풀이입니다.

하지만 위의 풀이의 경우 중복의 연산이 너무나 많이 생기게 됩니다.  
예를 들어, S=6,E=8 / S=5,E=9 / S=4,E=10 이렇게 세가지 질문이 주어졌을 때, S=6,E=8을 연산하는 과정이 다른 질문에서 모두 중복이 되어 연산을 수행해야합니다.

### 따라서 오직 한 번만 연산을 수행하고 이미 구한 값은 저장된 값으로 부터 가져오는 방법이 필요합니다.

**다이내믹 프로그래밍**을 사용하여, 모든 경우를 한번씩 연산을 하여 봅시다.  
길이가 N인 수열에서 **두 점을 선택하는 경우**는 **O(N^2)**이므로 **팰린드롬**인지 확인해야할 총 경우는 **O(N^2)** 이라고 마찬가지로 생각할 수가 있습니다.

**O(N^2)** 만큼 미리 팰린드롬의 결과를 저장하여 질문이 들어올때 출력하기만 하면,
**각 질문에 대해서**는 시간복잡도 **O(1)** 으로 수행할 수가 있게 됩니다.

이 경우의 총 시간복잡도는 **O(N^2 + M)** 이며 시간안에 문제를 풀 수가 있게됩니다.

> **구현 과정: 첫번째 방법**
>
> Top-Down 방식의 Dynamic Programming 풀이를 사용합니다.

- 점화식
- D[i][j] = i부터 j까지 팰린드롬일 경우 1, 아니면 0
- D[i][j] = (A[i]==A[j] 이고 D[i+1][j-1] 역시 팰린드롬이면) 1, 아니면 0
- 종결 조건
- i==j 이면, D[i][j]=1 (수열의 길이가 1인 경우)
- i==j-1 이면, A[i]==A[j] 일때 D[i][j]=1 아니면 0 (수열의 길이가 2인 경우)

```python
# 재귀함수를 이용해 Top-Down 방식으로 DP를 수행합니다.
def palidrome(i,j):
  # 재귀 종결조건
  if i==j:
    return 1
  if i==j-1:
    if a[i]==a[j]:
      return 1
    else:
      return 0
  # memoization을 통해 이미 구한 수열을 다시 구하지 않도록 한다.
  if d[i][j] != -1:
    return d[i][j]
  # 재귀적으로 palindrome 수행
  if a[i] == a[j]:
    d[i][j] = palidrome(i+1,j-1)
  else:
    d[i][j]=0
  return d[i][j]

```

> **구현 과정: 두번째 방법**
>
> Bottom-up 방식의 Dynamic Programming 풀이를 사용합니다.

- 팰린드롬일 경우 1 아니면 0을 이차원 배열 D에 저장
- 길이가 1인 경우: 항상 팰린드롬을 만족하므로 1
- 길이가 2인 경우: a[i]==a[j] 인 경우 1
- 길이가 3~n인 경우: a[i]==a[j] 이며 d[i+1][j-1]==1 인 경우 1

```python
# 반복문을 통해서 Bottom-Up 방식으로 DP를 수행합니다.
d = [[0]*n for _ in range(n)]
for i in range(n):
    d[i][i] = 1
for i in range(n-1):
    if a[i] == a[i+1]:
        d[i][i+1] = 1
for k in range(3, n+1):
    for i in range(n-k+1):
        j = i+k-1
        if a[i] == a[j] and d[i+1][j-1]:
            d[i][j] = 1
```

> 전체 풀이
>
> - 첫번째 풀이

```python
import sys
sys.setrecursionlimit(100000)
def input(): return sys.stdin.readline().rstrip()

def palindrome(s, e):
    if s == e:
        return 1
    if s == e-1:
        if a[s] == a[e]:
            return 1
        else:
            return 0
    if d[s][e] != -1:
        return d[s][e]
    if a[s] == a[e]:
        d[s][e] = palindrome(s+1, e-1)
    else:
        d[s][e] = 0
    return d[s][e]


n = int(input())
a = list(map(int, input().split()))
m = int(input())
d = [[-1]*n for _ in range(n)]
for _ in range(m):
    s, e = map(int, input().split())
    s -= 1
    e -= 1
    print(palindrome(s, e))

```

> - 두번째 풀이

```python
import sys
def input(): return sys.stdin.readline().rstrip()

n = int(input())
a = list(map(int, input().split()))
m = int(input())
d = [[0]*n for _ in range(n)]

for i in range(n):
    d[i][i] = 1
for i in range(n-1):
    if a[i] == a[i+1]:
        d[i][i+1] = 1
for k in range(3, n+1):
    for i in range(n-k+1):
        j = i+k-1
        if a[i] == a[j] and d[i+1][j-1]:
            d[i][j] = 1
for _ in range(m):
    s, e = map(int, input().split())
    s -= 1
    e -= 1
    print(d[s][e])

```
