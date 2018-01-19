import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoList = ({ data, match }) => {
  console.log('SingleTodoList match', match);
  console.log('SingleTodoList data', data);
  if (!data.todoListById) return (<div>Loading...</div>)
  return (
    <div className="container">
      <h1>Single TodoList</h1>
    </div>
  )
}

export const myTodoListsQuery = gql`
  query {
    todoListId(id: 1) {
      id
      name
      # More stuff here...
    }
  }
`;

export default compose(
  graphql(myTodoListsQuery),
)(SingleTodoList)
