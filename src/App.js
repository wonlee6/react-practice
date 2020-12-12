import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import IteractionSample from './IteractionSample';
import LifeCycleSample from './LifeCycleSample';


// props : 컴포넌트 속성 , 부모 컴포넌트에서 설정
// state : 컴포넌트 내부에서 바뀔수 있는 값 (클래스형 state, 함수형 setState), 컴포넌트 내부에서 설정
// arr.map(callback, [thisarg]) : 
//  - callback 에는 3가지가 있다 1) currentValue : 현재 처리하고 있는 요소
//                              2) index : 현재 처리하고있는 index 값, 3) array : 현재 처리하고 있는 원본 배열
//  - thisarg :(선택항목) callback 함수 내부에서 사용할 this 레퍼런스
// const App = () => {
//   return <div><MyComponent name="REACT" favoriteNumber={1}>리액트</MyComponent>
//     <Counter />
//     <Say />
//     <EventPractice />
//     <ValidationSample />
//     <IteractionSample />
//     <LifeCycleSample />
//     {/* <ScrollBox ref={(ref) => this.ScrollBox = ref} />
//     <button onClick={() => this.scrollBox.scrollToBottom}>맨 밑으로</button> */}
//   </div>
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends React.Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    )
  }
}

export default App;
