import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoLists = ({ data }) => {
  // Figure out how to add a directive to the GraphQL query
  // http://graphql.org/learn/queries/#directives
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
    me {
      id
      todoLists {
        id
        name
        todoTasks {
          id
          completed
        }
      }
    }
  }
`;

export default compose(
  graphql(myTodoListsQuery),
)(SingleTodoLists)
