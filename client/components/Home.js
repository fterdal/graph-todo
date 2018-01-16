import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { AllTodoLists } from './index';

export const Home = ({ data }) => {
  console.log('Home data', data);
  if (data.me) return (<AllTodoLists />);
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
      email
    }
  }
`;

export default compose(
  graphql(meQuery),
)(Home)
