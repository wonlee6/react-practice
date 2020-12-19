import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

// dmd
const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/Red" component={RedPage} />
      <Route path="/Blue" component={BluePage} />
    </div>
  );
};

export default App;