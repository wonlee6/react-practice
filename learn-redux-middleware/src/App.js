import React from 'react';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
// 미들웨어 : 액션 -> 미들웨어 -> 리듀서 -> 스토어
// redux-thunk: 비동기 처리할때 사용
const App = () => {
  return (
    <div>
      <CounterContainer />
      {/* <SampleContainer /> */}
    </div>
  );
};

export default App;