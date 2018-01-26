import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoTask = ({ data }) => {
  if (!data.todoTaskById) return (<div>Loading...</div>)
  return (
    <li> TodoTask Title </li>
  )
}

export const myTodoTaskQuery = gql`
  query myTodoTask($id: Int!){
  	todoTaskById(id: $id) {
      id
      title
      completed
    }
  }
`;

export default compose(
  graphql(myTodoTaskQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
)(SingleTodoTask)
