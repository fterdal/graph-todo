import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const AllTodoLists = ({ data }) => {
  console.log('AllTodoLists data', data);
  if (!data.me || !data.me.todoLists) return (<div>Loading...</div>)
  const todoLists = data.me.todoLists.map(list => {
    return (<li key={list.name + list.id}>{list.name}</li>)
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
      }
    }
  }
`;

export default compose(
  graphql(myTodoListsQuery),
)(AllTodoLists)
