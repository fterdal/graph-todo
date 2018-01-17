import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoLists = ({ data }) => {
  console.log('SingleTodoLists data', data);
  if (!data.me || !data.me.todoLists) return (<div>Loading...</div>)
  return (
    <div className="container">
      <h1>Single TodoList</h1>
    </div>
  )
}

export const myTodoListsQuery = gql`
  query {
    todoListId(id: 1) {
      # More stuff here...
    }
  }
`;

export default compose(
  graphql(myTodoListsQuery),
)(SingleTodoLists)
