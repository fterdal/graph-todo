import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const App = ({data}) => {
  const users = data.loading ? [] : data.allUsers;
  const usersList = users.map(user => {
    return <li key={user.id} >{user.id} -- {user.email}</li>;
  })
  return (
    <div className="container">
      <h1>All Users</h1>
      <ul className="users-list">
        {usersList ? usersList : 'Loading...'}
      </ul>
    </div>
  )
}

const query = gql`
  query {
  allUsers {
    id
    email
  }
}
`;

export default compose(
  graphql(query),
)(App)
