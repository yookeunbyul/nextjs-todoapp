# Todo App

Next.js와 zustand, tailwind CSS를 학습하기 위해 진행한 토이 프로젝트로, 간단한 Todo App입니다.

![Animation](https://github.com/yookeunbyul/nextjs-todoapp/assets/91243651/4d00d9bd-505d-4112-90e5-78ba56b1b3f3)

- Todo 추가
- Todo 수정
- Todo 삭제
- Todo 완료 체크

위와 같은 기능을 구현했습니다.

<br />

### 실행

```
$ npm install
$ npm run dev
```

<br />

### 프로젝트를 진행하며 느낀 점

한번 zustand와 tailwind CSS를 어떻게 사용하는지가 궁금해서 간단하게 Todo App을 만들어봤다. tailwind CSS는 옛날에 부트스트랩으로 스타일링했던 경험이 떠올랐고 원하는 속성를 위해 className을 서칭하느라 시간을 많이 잡아먹었다. 그래서 딱히 긍정적인 느낌이 들진 않았다.

하지만 zustand는 redux와 recoil을 사용해본 경험을 되짚어봤을 때, 굉장히 간단하게 store를 만들 수 있어서 좋았다. 또한 상태 변수와 해당 상태를 업데이트하는 액션(함수)만 적으면 쉽게 상태관리를 할 수 있어서 그 점도 좋았다.

왜 요즘 zustand가 많이 사용되는지 알 수 있었고 앞으로 또다른 프로젝트를 해봐야겠다는 생각이 들었다.
