import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
  UsersList,
  Home,
  SideBar,
  AllTodoLists,
  Login,
  Signup,
} from './components';
import history from './history';

export const App = () => {
  return (
    <Router history={history}>
      <div className="app-container">
        <SideBar />
        <div>
          <Switch>
            <Route path="/users" component={UsersList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/lists" component={AllTodoLists} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
