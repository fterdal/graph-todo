import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const SingleTodoList = ({ data }) => {
  if (!data.todoListById) return (<div>Loading...</div>)
  const { todoListById } = data;
  const todoTasks = todoListById.todoTasks.map(task => {
    console.log(task.title, task.completed)
    return (
      <li
        key={task.title + task.id}
        style={{
          fontWeight: task.commpleted ? 'bold' : 'normal',
          // textDecoration: task.commpleted ? 'line-through' : 'none',
        }}>
        {task.title} - {task.completed ? 'completed' : 'not completed'}
      </li>
    )
  });

  return (
    <div className="container">
      <h1>{data.todoListById.name}</h1>
      <ul>
        {todoTasks}
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
