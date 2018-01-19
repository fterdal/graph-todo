import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { SingleTodoLists } from './index';

export const AllTodoLists = ({ data, match }) => {
  // console.log('match', match);
  // console.log('AllTodoLists data', data);
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
      <Link to="/lists/1">
        {list.name} <span>({numCompleted} / {numTasks})</span>
      </Link>
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
