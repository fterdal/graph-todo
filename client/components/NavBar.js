import React from 'react';
import { NavLink } from 'react-router-dom';
import { Login } from './auth';

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <div className="authButtons">
            <Login />

          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
