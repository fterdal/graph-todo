import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
  UsersList,
  Home,
  SideBar,
} from './components';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <div className="app-container">
        {console.log('localStorage', localStorage)}
        <SideBar />
        <div>
          <Switch>
            <Route path="/users" component={UsersList} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
