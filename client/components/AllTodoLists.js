import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const AllTodoLists = ({ data }) => {
  console.log('AllTodoLists data', data);
  if (!data.me || !data.me.todoLists) return (<div>Loading...</div>)
  const todoLists = data.me.todoLists.map(list => {
    const numTasks = list.todoTasks.length;
    const numCompleted = list.todoTasks.filter(task => task.completed).length;
    let allDone;
    if (numTasks && numTasks !== numCompleted) allDone = true;
    return (
    <li
      key={list.name + list.id}
      style={{
        fontWeight: allDone ? 'bold' : 'normal',
        textDecoration: allDone ? 'normal' : 'line-through',
      }}>
      {list.name} <span>({numCompleted} / {numTasks})</span>
    </li>)
  })
  return (
    <div className="container">
      <h1>Your Todo Lists</h1>
      <ul>
        {todoLists}
      </ul>
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
)(AllTodoLists)
