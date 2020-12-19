import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

// useState 는 하나의 함수만 관리 가능
// useEffect 렌더링 될 때마다 특정 작업을 수행할 수 있도록 설정
// useReducer 현재 상태, 업데이트 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환
// useMemo 연산 작업 최적화
// usecallback 컴포넌트 최적화

const App = () => {

  //const [visible, setVisible] = useState(false);

  return (
    <div>
      <Counter /> <br />
      <Info /> <br />
      <Average />
      {/* <button onClick={() => {
        setVisible(!visible);
      }}
      >{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Info />} */}
    </div>
  )
}

export default App;