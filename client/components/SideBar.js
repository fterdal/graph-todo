import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter, Link } from 'react-router-dom';
import { Logout } from './index';

const LoginButton = withRouter(({ history }) => {
  return (
    <a className="button auth-button" onClick={() => history.push('/login')}>Login</a>
  )
})

const SideBar = ({ data }) => {
  // console.log('history', history)
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

export default withRouter(compose(
  graphql(meQuery),
)(SideBar))
