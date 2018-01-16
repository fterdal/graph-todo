import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const AllTodoLists = ({ data }) => {
  console.log('AllTodoLists data', data);
  return (
    <div className="container">
      <h1>AllTodoLists Page</h1>
    </div>
  )
}

export const myTodoListsQuery = gql`
  query {
    me {
      id
      todoLists {
        id
        name
      }
    }
  }
`;

export default compose(
  graphql(myTodoListsQuery),
)(AllTodoLists)
