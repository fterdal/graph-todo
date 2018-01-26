import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { SingleTodoTask } from './index';

export const SingleTodoList = ({ data }) => {
  if (!data.todoListById) return (<div>Loading...</div>)
  const { todoListById: { name, todoTasks } } = data;
  return (
    <div className="container">
      <h1>{name}</h1>
      <ul>
        {todoTasks.map(task => <SingleTodoTask key={task.title + task.id} id={task.id} />)}
      </ul>
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
      }
    }
  }
`;

export default compose(
  graphql(myTodoListQuery, {
    options: ({ match }) => ({ variables: { id: match.params.id } }),
  }),
)(SingleTodoList)
