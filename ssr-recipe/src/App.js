import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import UsersPage from './pages/UsersPage';

// dmdsdsd
const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;