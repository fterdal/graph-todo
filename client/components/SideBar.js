import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const SideBar = (props) => {
  const welcome = !props.data.me ? (<div>Login or Signup</div>)
                                 : (<div>Welcome, {props.data.me.email}</div>);
  return (
    <div className="sidebar-container">
      <div />
      {welcome}
      <a className="button auth-button">Login</a>
      <a className="button auth-button">Signup</a>
    </div>
  )
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
