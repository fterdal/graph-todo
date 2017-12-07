import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
  UsersList,
  Home,
  NavBar,
  SidebarLeftPush,
} from './components';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <div>
        <SidebarLeftPush />
        <Switch>
          <Route path="/users" component={UsersList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
