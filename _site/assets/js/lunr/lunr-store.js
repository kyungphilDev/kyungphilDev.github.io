var store = [{
        "title": "React Study(1) 정리",
        "excerpt":"Component-Driven User Interfaces A Client-side JavaScript library All aobut building modern, reactive user interfaces for the web Building Single-Page-Applications (SPAs) 배워야할 개념들 Components &amp; Building UIs Working with Events &amp; Data: “props” and “state” Styling React Apps &amp; Components React Hooks React Redux Http Requests &amp; Custom Hooks Routing, Deployment,...","categories": ["React"],
        "tags": ["React","JS","Web Framework"],
        "url": "/react/react-study-1/",
        "teaser": null
      },{
        "title": "Pipeline CPU(1) <br> Single_Cycle_CPU VS Multi_Cycle_CPU",
        "excerpt":"Pipeline-CPU 목차 Pipeline CPU(1) : Single-Cycle vs Multi-Cycle CPU Pipeline CPU(2) : Pipeline-CPU의 간략한 이해 Pipeline CPU(3) : Data Hazard(RAW) Pipeline CPU(4) : Data Forwarding Pipeline CPU(5) : Control Hazard Pipeline CPU를 design &amp; implement 하기 위해서는 Single-Cycle과 Multi-Cycle CPU의 특성들을 이해하는 것이 필요합니다. 어떠한 특성으로 인해 Pipeline-CPU가 가장 빠르게...","categories": ["Computer-Architecture"],
        "tags": ["computer architecture","computer science","single cycle","single cycle cpu","multi cycle","multi cycle cpu","pipeline","cpu"],
        "url": "/computer-architecture/pipeline-1/",
        "teaser": null
      },{
        "title": "Pipeline CPU(2) Pipeline-CPU의 간략한 이해",
        "excerpt":"Pipeline-CPU 목차 Pipeline CPU(1) : Single-Cycle vs Multi-Cycle CPU Pipeline CPU(2) : Pipeline-CPU의 간략한 이해 Pipeline CPU(3) : Data Hazard(RAW) Pipeline CPU(4) : Data Forwarding Pipeline CPU(5) : Control Hazard 앞서 Pipeline CPU를 design 해보기 위한 준비과정으로 Single-Cycle CPU와 Multi-Cycle CPU의 특성들을 먼저 살펴보았습니다. Pipeline CPU의 전체적 그림 Pipeline-CPU은 사실...","categories": ["Computer-Architecture"],
        "tags": ["computer architecture","computer science","single cycle","single cycle cpu","multi cycle","multi cycle cpu","pipeline","cpu"],
        "url": "/computer-architecture/pipeline-2/",
        "teaser": null
      },{
        "title": "Pipeline CPU(3)- Data Hazard",
        "excerpt":"Pipeline-CPU 목차 Pipeline CPU(1) : Single-Cycle vs Multi-Cycle CPU Pipeline CPU(2) : Pipeline-CPU의 간략한 이해 Pipeline CPU(3) : Data Hazard(RAW) Pipeline CPU(4) : Data Forwarding Pipeline CPU(5) : Control Hazard 세가지 주요 사항 Data Hazard Control Hazard Branch Prediction 이번 Post에서는 Pipeline-CPU를 구현하기 위해 꼭 알아야할 위의 세가지 주요 사항들...","categories": ["Computer-Architecture"],
        "tags": ["data hazard","RAW","pipeline","cpu","RAW Hazrd","Branch Prediction","2-bit global"],
        "url": "/computer-architecture/pipeline-3/",
        "teaser": null
      },{
        "title": "Pipeline CPU(4)- Data Forwarding",
        "excerpt":"Pipeline-CPU 목차 Pipeline CPU(1) : Single-Cycle vs Multi-Cycle CPU Pipeline CPU(2) : Pipeline-CPU의 간략한 이해 Pipeline CPU(3) : Data Hazard(RAW) Pipeline CPU(4) : Data Forwarding Pipeline CPU(5) : Control Hazard STALL을 통한 Data Hazard 해결 RAW Hazard를 해결하는 가장 간단한 방법은 RAW가 발생한 두 Instruction간의 거리를 3보다 멀어지도록 두 Instruction...","categories": ["Computer-Architecture"],
        "tags": ["data hazard","RAW","pipeline","cpu","RAW Hazrd","Branch Prediction","2-bit global"],
        "url": "/computer-architecture/pipeline-4/",
        "teaser": null
      },{
        "title": "Pipeline CPU(5)- Control Hazard",
        "excerpt":"Pipeline-CPU 목차 Pipeline CPU(1) : Single-Cycle vs Multi-Cycle CPU Pipeline CPU(2) : Pipeline-CPU의 간략한 이해 Pipeline CPU(3) : Data Hazard(RAW) Pipeline CPU(4) : Data Forwarding Pipeline CPU(5) : Control Hazard 세가지 주요 사항 Data Hazard Control Hazard Branch Prediction Control Hazard 앞서 Pipeline-CPU를 이해하는데 중요한 세가지 주요 사항들 중에서 Data...","categories": ["Computer-Architecture"],
        "tags": ["control hazard","pipeline","Branch Prediction","2-bit global"],
        "url": "/computer-architecture/pipeline-5/",
        "teaser": null
      },{
        "title": "Introducing Python 파이썬 정리(1)",
        "excerpt":"Introducing Python 처음 시작하는 파이썬[2판] 을 읽으면서, 몇 가지 헷갈리거나 새롭게 알게된 문법, 함수, 메소드들을 정리하려고 합니다. 데이터: 타입, 값, 변수 튜플과 리스트 리스트를 문자열로 변환하기: join() # join과 split을 서로 정반대의 개념으로 이해하면 편하다. friends = ['Harry', 'Hermione', 'Ron'] separator = '*' joined = separator.join(friends) &gt;&gt;&gt; joined 'Harry*Hermione*Ron' separated...","categories": ["python"],
        "tags": ["python","programming"],
        "url": "/python/python/",
        "teaser": null
      },{
        "title": "파이썬 f-문자열",
        "excerpt":"f-문자열 파이썬 3.6 이상 버전에서부터는 f-문자열을 사용하여 여러 변수들을 문자열의 형태로 쉽고 편하게 출력이 가능합니다. 사용 방법은 간단합니다. 첫 인용 부호 앞에 문자 f를 입력합니다. 변수 명이나 식을 중괄호 안에 포함하여 문자열에 넣어줍니다. 예시: f’abcdefg. {변수명}’ day=27 print(f’오늘은 {day}일 입니다’) 출력 결과: 오늘은 27일 입니다 문제를 통해 직접 적용을 하는...","categories": ["python"],
        "tags": ["python","programming"],
        "url": "/python/python1-copy/",
        "teaser": null
      },{
        "title": "Introducing Python 파이썬 정리(2)",
        "excerpt":"Introducing Python 처음 시작하는 파이썬[2판] 을 읽으면서, 몇 가지 헷갈리거나 새롭게 알게된 문법, 함수, 메소드들을 정리하려고 합니다. 함수 익명 함수: lambda 단일 문장으로 표현되는 익명함수를 lambda 함수 라고 한다. def makeTitle(titles, func): for title in titles: print(fuc(title)) def makeCapital(word): return word.capitalize() titles = ['kingdom','her'] makeTitle(titles,makeCapital) &gt;&gt;&gt; Kingdom &gt;&gt;&gt; Her #lambda함수를...","categories": ["python"],
        "tags": ["python","programming"],
        "url": "/python/python3/",
        "teaser": null
      },{
        "title": "2차원 배열 유형 문제",
        "excerpt":"삼성역량테스트에서 출제되는 코테문제들의 경우 2차원 배열을 특정한 기준을 통해 회전시키는 문제가 자주 출제됩니다. 그래서 이번 포스트에서는 관련된 유사한 유형의 문제들로 코테에 자주 등장하는 2차원 배열을 능숙하게 다루는 유형을 대비하여 봅시다. 관련 문제) 삼성SW역량테스트 20년 하반기 오후 2번 문제 삼성SW역량테스트 21년 상반기 오후 2번 문제 백준) 배열 돌리기 3(16935번) 배열돌리기 3_백준...","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/2d_list/",
        "teaser": null
      },{
        "title": "11066번 파일 합치기(다이내믹 프로그래밍)",
        "excerpt":"다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄보도록 합시다. 관련 문제) 10942 팰린드롬 12865 평범한 배낭 백준) 파일 합치기(11066번) 파일 합치기 문제 설명: 챕터마다 파일크기가 주어집니다. 연속을 유지하며 파일을 모두 합치는데 필요한 최소 비용을 구하시오. (파일 챕터가 뒤죽박죽...","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/file-merge/",
        "teaser": null
      },{
        "title": "12865번 평범한 배낭(다이내믹 프로그래밍)",
        "excerpt":"다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄 보도록 합시다. 백준) 평범한 배낭(12865번) 평범한 배낭 문제 설명: 최대 k 무게만큼 넣을 수 있는 배낭에 가치를 넣을 수 있는 최대값을 구하시오. 문제 설명 문제에서 물품의 수(N)는 최대 100 입니다....","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/kanp-sack/",
        "teaser": null
      },{
        "title": "10942번 펠린드롬(다이내믹 프로그래밍)",
        "excerpt":"다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄보도록 합시다. 관련 문제) 11066번 파일합치기 12865번 평범한배낭 백준) 배열 돌리기 3(16935번) 팰린드롬_백준 문제 설명: 길이가 n인 수열이 주어졌을 때, 임의의 시작점과 끝점에 대해서 팰린드롬을 만족하는지 확인하는 문제입니다. 문제 설명 문제에서...","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/palindrome/",
        "teaser": null
      },{
        "title": "15989번 1,2,3 더하기 4(다이내믹 프로그래밍)",
        "excerpt":"다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄보도록 합시다. 관련 문제) 2293 동전1 2294 동전2 백준) 1,2,3 더하기 4(15989번) 1,2,3 더하기 4 문제 설명: 1,2,3 의 합으로 임의의 숫자를 표현하는 방법의 개수를 구하는 문제입니다. 단, 숫자의 순서만 바뀐...","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/sum123/",
        "teaser": null
      },{
        "title": "5557번 1학년(다이내믹 프로그래밍, Knacksack 응용)",
        "excerpt":"다이내믹 프로그래밍 방법이 필요한 문제들은 처음엔 접근 방법이 막막하게 느껴지곤 합니다. DP 접근 풀이가 필요한 관련 유형의 문제들을 많이 다뤄 보도록 합시다. 관련 문제) 12865번 평범한 배낭 1495번 기타리스트 백준) 1학년(5557번) 1학년 문제 설명: 0~20 까지의 숫자 연산만 가능할 때, + 와 - 만을 사용하여 등식을 완성할 수 있는 총...","categories": ["coding-test"],
        "tags": ["algorithm","coding-test","python","programming"],
        "url": "/coding-test/junior/",
        "teaser": null
      },{
        "title": "recommender system 관련 주제 탐색",
        "excerpt":"주요 주제) Contents based approach(콘텐츠기반 접근방식) (1) 독립적인 정보활용 자신의 데이터를 토대로 유사성 측정을 통한 추천(과거 이력 등 충분한 자신의 데이터가 필요) (2) 새로운 아이템 Collaborative Filtering 은 first ratre(새로운 아이템에 대한 소비자의 평가 데이터) 문제가 발생한다. 하지만 콘텐츠 기반 방법은 새로운 아이템에 대한 평가점수 없이도 추천이 가능하다. (3) 과도한...","categories": ["project"],
        "tags": ["ML","DL","recommendation system"],
        "url": "/project/project_1/",
        "teaser": null
      },{
        "title": "PCA, EVD",
        "excerpt":"PCA 주성분 분석(차원 축소) Principal Component Analysis 참고) Auto Encoder 고차원의 데이터들을 정사영 시켜 차원을 낮춘다면, 어떤 벡터에 데이터들을 정사영시키는 것이 원래 데이터의 정보손실을 가장 최소화 할 수 있을까에 대한 방법론 Covariance Matrix 공분산 행렬 공분산 행렬의 계산 공분산 행렬을 통해 각 feture들의 변동이 얼마나 닮아있는지 를 알 수 있다....","categories": ["project"],
        "tags": ["ML","DL","recommendation system"],
        "url": "/project/project_2/",
        "teaser": null
      },{
        "title": "NMF",
        "excerpt":"NMF 음수미포함 행렬분해 Non-negative Matrix Factorization SVD와 같은 Matrix Factorization 과 PCA와 같은 차원 축소(dimension reduction)을 이용한 방법들은 nonnegativity를 보장할 수가 없기 때문에 non-negative features를 다루는 데이터에서는 사용하기에 적합하지 않다. 따라서 Non-negative 데이터는 non-negative feature로 설명하는 것이 좋다. SVD는 여러 장점들이 있지만, factor들은 Interpretability(input이나 parameter에 변화를 주었을 때 어떤 결과가...","categories": ["project"],
        "tags": ["ML","DL","recommendation system"],
        "url": "/project/project_3/",
        "teaser": null
      }]
