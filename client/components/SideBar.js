import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Logout } from './index';

/***** GraphQL *****/
export const meQuery = gql`
  query {
    me {
      id
      email
    }
  }
`;

/***** React Component *****/
export const SideBar = ({ data }) => {
  const loggedIn = !!data.me;

  if (loggedIn) {
    return (
      <div className="sidebar-container">
        <div />
        <div>Welcome, {data.me.email}</div>
        <a className="button auth-button">Account</a>
        <Logout />
      </div>
    )
  } else {
    return (
      <div className="sidebar-container">
        <div />
        <div />
        <Link className="button auth-button" to="/login">Login</Link>
        <Link className="button auth-button" to="/signup">Signup</Link>
      </div>
    )
  }
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(meQuery),
)(SideBar)
