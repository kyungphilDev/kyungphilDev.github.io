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
        "excerpt":"Introducing Python 처음 시작하는 파이썬[2판] 을 읽으면서, 몇 가지 헷갈리거나 새롭게 알게된 문법, 함수, 메소드들을 정리하려고 합니다. 제 기준으로 작성한 것이므로 참고만 해주세요.^^ 데이터: 타입, 값, 변수 튜플과 리스트 리스트를 문자열로 변환하기: join() # join과 split을 서로 정반대의 개념으로 이해하면 편하다. friends = ['Harry', 'Hermione', 'Ron'] separator = '*' joined...","categories": ["python"],
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
        "excerpt":"Introducing Python 처음 시작하는 파이썬[2판] 을 읽으면서, 몇 가지 헷갈리거나 새롭게 알게된 문법, 함수, 메소드들을 정리하려고 합니다. 제 기준으로 작성한 것이므로 참고만 해주세요.^^ 함수 익명 함수: lambda 단일 문장으로 표현되는 익명함수를 lambda 함수 라고 한다. def makeTitle(titles, func): for title in titles: print(fuc(title)) def makeCapital(word): return word.capitalize() titles = ['kingdom','her']...","categories": ["python"],
        "tags": ["python","programming"],
        "url": "/python/python3/",
        "teaser": null
      }]
