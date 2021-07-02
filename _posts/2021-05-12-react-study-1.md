---
layout: posts
title: React Study(1) 정리
comments: true
category: React
tags: [React, JS, Web Framework]
---

### Component-Driven User Interfaces

- A Client-side JavaScript library
- All aobut building modern, reactive user interfaces for the web

- Building Single-Page-Applications (SPAs)

### 배워야할 개념들

- Components & Building UIs
- Working with Events & Data: "props" and "state"
- Styling React Apps & Components
- React Hooks
- React Redux
- Http Requests & Custom Hooks
- Routing, Deployment, NextJS & etc

### Component

- functional programming의 개념
- Reusability
- reactive components consited of HTML and JavaScript (and CSS)
- Define the desired target state
- let React figure out the actual JAvaScript Dom instructions

### 6월 13일

> 29번. JSX javascript XML
> developer friendly code를 가능하게 해주는 것.
> Component in React is just a JavaScript function.
> 사용자 정의된 Component는 Upper case로 시작해야한다.
> Lower case로 시작한 것은 div 이런 기본 element들로 인식.
> 하나의 컴포넌트는 하나의 root element를 소유해야만 한다.
> React로 render 한 이후에 element view된 값들을 수정하려면 일반적인 함수를 통한 방법으로는 다시 re-render(reevaluation) 되지 않는다. 왜냐하면 element가 event가 발생한 사실을 알 수가 없기 때문이다. 따라서 State가 필요하다.
> state를 update할 때 previous state를 즉 가장 최근의 data를 update하도록 잘 설정해주어야 한다.

> styledComponents
> cssModule

> React.Fragments : wrapper for preventing from nested div problems(unnecessary many div_s).
> React Portal: ex) Modal hierarchy
> Controlled vs UnControlled Component

---

\*\*
useEffect Hook 잘 이해하기 !!

> useEffect() Hook!! : To re-run logic when some specific data has been changed(change is detected)

> debouncing: to check whether user is done keystroking
> useEffect() 함수 내에서 return () => {} 의 함수는 다시한번 useEffect가 호출되기 직전에 return안의 함수가 실행된다. 처음에은 실행X. 따라서 return 안에는 cleanUp해주는 함수들을 정의해서 넣어주면 된다.(ex clearTimeout...)

---

\*\*
useReducer Hook!

> useState에서 만약 다른 state 값을 접근하여 state값을 변경하도록 하는 로직이라면 잘 못 작성한 useState사용 방식이다(룰에 어긋남, 다른 state가 도중에 변경되는 sync가 안 맞을 수도 있는 그런 경우 때문인듯), 그래서 이 경우에 useReducer를 사용할 수 있다.

---

React Context!

> data forwarding을 위해서 아무 의미없이 컴포넌트가 dat의 forward역할 (거쳐가는 통로)로만 사용되면 big project(huge project)일 때 너무 번거롭고 오류가 생길 수 있기에 React Context를 사용하면 유용하다.

> long-prop-chain 문제를 해결가능

---

React Hook Rules

> React Hook은 React 컴포넌트 내에서만 사용가능하다.
> React Hook은 컴포넌트의 Top level에서 call해야한다.(nested hooks are not allowed)

---

Look behind the scenes of react

> Virtual DOM diffing
> React.memo()
> javascript는

- false === false => true;
- 'hi' === 'hi' => true;
- [1,2,3] === [1,2,3] => false; !! 위와 같은 primitive variable은 구분하지만 function이나 Object는 비교를 하지 않는다 따라서 JS는 이걸 주의해야한다.(항상 새로운 값으로 바뀐것으로 인식하여 re-render 되기 때문)

> useMemo(()=> {
> return ...;
> }, [items]);

---

Class-based Components(Not a Components as Functions)

> Class-based Components can't use React Hooks!
> 옛날 버전의 React

> Error Boundaries 는 Class-based Component 에서만 ComponentDidCatch(error) 이런 방식으로 사용가능하다.

---

\*\*중요
Custom Hooks

> Why?
> duplication of same logic 일때 유용 (customized reusing logic)
> useOOOO 로 함수 이름을 정해야 한다.
> Generic한 Rule을 따라야한다.

---

\*\*
Redux

> state management system for cross-component or app-wide state
> Redux vs React Context

> React Context 단점
> -Complex Setup/Management
> -high-frequency changes makes low Performance

> Redux
> -Central Data(State) store
> -Subscription
> -Reducer Function mutates store data
> -Components Dispatch Action, Actions are Forwarded to Reducer fuction -항상 override state 방식으로 mutate해야만한다 주의 !!(state immutability)
> npm i redux react-redux
> npm i @reduxjs/toolkit

---

중요\*\*
Advanced Redux

- Handling Async Tasks with Redux

---

Routing

> npm i react-router-dom
> Router
> NavLink
> Switch : 원하는 하나의 page link만 load 하도록
> 예시 : <Route path={`/quotes/${params.quoteId}/comments`}>
> Prompt
> Query URL
> useParams
> useRouterMatch
> Redirect

---

Deployment

-Test Code
-Optimize Code

> ex) React.memo 불필요한 re-render 요소 줄이기
> Lazy Loading

-Build App for Production
-Upload Production Code to Server
-Configure Server

> Server-side Routing vs Client-side Routing
