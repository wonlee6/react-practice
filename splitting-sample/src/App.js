import React, { Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css'
import loadable from '@loadable/component';

//const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>Loading...</div>
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Heloow wowowo</p>
        {/* <Suspense fallback={<div>Loading ....</div>}> */}
        {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>

    </div >
  );
};

export default App;