import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';


// props : 컴포넌트 속성 , 부모 컴포넌트에서 설정
// state : 컴포넌트 내부에서 바뀔수 있는 값 (클래스형 state, 함수형 setState), 컴포넌트 내부에서 설정

const App = () => {
  return <div><MyComponent name="REACT" favoriteNumber={1}>리액트</MyComponent>
    <Counter />
    <Say />
    <EventPractice />
    <ValidationSample />
    {/* <ScrollBox ref={(ref) => this.ScrollBox = ref} />
    <button onClick={() => this.scrollBox.scrollToBottom}>맨 밑으로</button> */}
  </div>
}



export default App;
