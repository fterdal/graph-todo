import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
