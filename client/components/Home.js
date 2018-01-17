import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { AllTodoLists } from './index';

export const Home = ({ data }) => {
  if (data && data.me) return (<AllTodoLists />);
  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  )
}

export const meQuery = gql`
  query {
    me {
      id
    }
  }
`;

export default compose(
  graphql(meQuery),
)(Home)
