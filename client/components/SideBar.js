import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
// import { client } from '../index';

const SideBar = (props) => {
  console.log('props', props);
  const welcome = !props.data.me ? (<div>Login or Signup</div>)
                                 : (<div>Welcome, {props.data.me.email}</div>);
  // console.log('props:', props);
  // console.log('client:', client);
  // client.watchQuery({
  //   query: gql`{ me { id email } }`,
  //   fetchPolicy: 'cache-only',
  // }).subscribe({
  //   next: (thing) => { console.log('thing', thing) },
  // });
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
