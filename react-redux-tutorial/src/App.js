import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

// components : 화면에 실제로 그려지는 컴포넌트를 담는 폴더
// containers : 리덕스 스토어와 컴포넌트를 이어주는 매개체를 담는 폴더
// modules : 리덕스의 State, Reducer를 정의한 파일들을 담는 폴더

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;