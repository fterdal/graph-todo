import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoList = ({ data, match }) => {
  console.log('SingleTodoList match', match);
  console.log('SingleTodoList data', data);
  if (!data.todoListById) return (<div>Loading...</div>)
  return (
    <div className="container">
      <h1>{data.todoListById.name}</h1>
    </div>
  )
}

// Figure out how to dynamically pass the match.params.id into the query
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
    options: { variables: { id: 1 } },
  }),
)(SingleTodoList)
