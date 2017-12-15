import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const SideBar = ({ data }) => {
  const loggedIn = !!data.me;

  if (loggedIn) {
    return (
      <div className="sidebar-container">
        <div />
        <div>Welcome, {data.me.email}</div>
        <a className="button auth-button">Account</a>
        <a className="button auth-button">Logout</a>
      </div>
    )
  } else {
    return (
      <div className="sidebar-container">
        <div />
        <div />
        <a className="button auth-button">Login</a>
        <a className="button auth-button">Sign Up</a>
      </div>
    )
  }
}

export const meQuery = gql`
  query {
    me {
      id
      email
    }
  }
`;

export default compose(
  graphql(meQuery),
)(SideBar)
