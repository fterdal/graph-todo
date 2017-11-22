import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is the main App component.</h1>
      <h2>Eventually, this'll be a list of users, gathered from GraphQL</h2>
      <ul>
        <li>dummy</li>
        <li>dummy2</li>
        <li>dummy3</li>
      </ul>
    </div>
  )
}

const query = gql`
  query {
  userById(id: 4) {
    id
    email
  }
}
`;

export default compose(
  graphql(query),
)(App)
