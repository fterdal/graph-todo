import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { SingleTodoTask } from './index';

/***** GraphQL *****/
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

/***** React Component *****/
export const SingleTodoList = ({ data: { todoListById } }) => {
  if (!todoListById) return (<div>Loading...</div>)
  const { name, todoTasks } = todoListById;
  return (
    <div className="container">
      <h1>{name}</h1>
      <ul>
        {todoTasks && todoTasks.map(task =>
          <SingleTodoTask key={task.title + task.id} id={task.id} />
        )}
      </ul>
    </div>
  )
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(myTodoListQuery, {
    options: ({ match }) => ({ variables: { id: match.params.id } }),
  }),
)(SingleTodoList)
