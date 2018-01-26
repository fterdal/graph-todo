import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { SingleTodoTask } from './index';

export const SingleTodoList = ({ data }) => {
  if (!data.todoListById) return (<div>Loading...</div>)
  const { todoListById: { name, todoTasks } } = data;
  // const todoTasks = todoListById.todoTasks.map(task => {
  //   return (
  //     <li
  //       key={task.title + task.id}
  //       style={{
  //         // fontWeight: task.completed ? 'bold' : 'normal',
  //         textDecoration: task.completed ? 'line-through' : 'normal',
  //       }}>
  //       {task.title}
  //     </li>
  //   )
  // });

  return (
    <div className="container">
      {/* <h1>{data.todoListById.name}</h1> */}
      <h1>{name}</h1>
      <ul>
        {/* {todoTasks} */}
        {/* {todoListById.todoTasks.map(task => <SingleTodoTask key={task.title + task.id} id={task.id} />)} */}
        {todoTasks.map(task => <SingleTodoTask key={task.title + task.id} id={task.id} />)}
        {/* <SingleTodoTask id={2} /> */}
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
