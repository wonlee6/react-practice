import React from 'react';
import CounterContainer from './containers/CounterContainer';
// 미들웨어 : 액션 -> 미들웨어 -> 리듀서 -> 스토어
const App = () => {
  return (
    <div>
      <CounterContainer />
    </div>
  );
};

export default App;