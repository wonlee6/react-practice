import React from 'react';
import Counter from './Counter';
import Info from './Info';

// useState 는 하나의 함수만 관리 가능
// useEffect

const App = () => {

  return (
    <div>
      <Counter /> <br />
      <Info />
    </div>
  )
}

export default App;