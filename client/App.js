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
        <SideBar />
        {/* <div className="sidebar-container"> */}
          {/* <div />
          <div>Welcome, USER</div>
          <div>Login</div>
          <div>Logout</div> */}
        {/* </div> */}
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

// // https://css-tricks.com/getting-started-css-grid/
// const GridDemoApp = () => {
//   return (
//     <div className="appContainer">
//       <div className="letter">
//         A
//       </div>
//       <div className="letter">
//         B
//       </div>
//       <div className="letter">
//         C
//       </div>
//       <div className="letter">
//         D
//       </div>
//     </div>
//   )
// }

export default App;
