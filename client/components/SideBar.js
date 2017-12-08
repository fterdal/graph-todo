import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const SideBar = (props) => {
  const welcome = !props.data.me ? (<div>Welcome, USER</div>)
                                 : (<div>Welcome, {props.data.me.email}</div>) ;
  console.log('props.data.me:', props.data.me);
  return (
    <div className="sidebar-container">
      <div />
      {welcome}
      <a className="button auth-button">Login</a>
      <a className="button auth-button">Logout</a>
    </div>
  )
}

const query = gql`
  query {
  me {
    id
    email
  }
}
`;

export default compose(
  graphql(query),
)(SideBar)
