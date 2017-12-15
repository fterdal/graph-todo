import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
  UsersList,
  Home,
  SideBar,
  Login,
  // Signup,
} from './components';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <div className="app-container">
        <SideBar />
        <div>
          <Switch>
            <Route path="/users" component={UsersList} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
