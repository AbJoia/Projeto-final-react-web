import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Global from './styles/global';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}>
          <Home />                
        </Route>
        <Route path="/signup" componente={Signup}>
          <Signup />
        </Route>
        <Route path="/user/:id" componente={User}>
          <User/>
        </Route>
      </Switch>
      <Global />
    </BrowserRouter>
  );
}
export default App;
