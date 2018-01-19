import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoList = ({ data }) => {
  console.log('SingleTodoList data', data);
  if (!data.todoListById) return (<div>Loading...</div>)
  return (
    <div className="container">
      <h1>{data.todoListById.name}</h1>
    </div>
  )
}

export const myTodoListQuery = gql`
  query myTodoList($id: Int!){
  	todoListById(id: $id) {
      id
      name
      description
      todoTasks {
        id
        title
        completed
      }
    }
  }
`;

export default compose(
  graphql(myTodoListQuery, {
    options: ({ match }) => ({ variables: { id: match.params.id } }),
  }),
)(SingleTodoList)
