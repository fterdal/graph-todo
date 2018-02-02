import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

/***** GraphQL *****/
export const myTodoTaskQuery = gql`
  query myTodoTask($id: Int!){
    todoTaskById(id: $id) {
      id
      title
      completed
    }
  }
`;
export const toggleCompleteTodoTaskMutation = gql`
  mutation toggleCompleteTodoTask($id: Int!, $completed: Boolean!) {
    updateTodoTask(input: {
      todoTaskId: $id
      input: {
        completed: $completed
      }
    }) {
      id
    }
  }
`;

/***** React Component *****/
export const SingleTodoTask = ({ data: { todoTaskById }, toggleComplete }) => {
  if (!todoTaskById) return (<div>Loading...</div>)
  const { id, title, completed } = todoTaskById;
  const _toggleComplete = () => {
    toggleComplete({
      variables: {
        id,
        completed: !completed,
      },
      refetchQueries: [{
        query: myTodoTaskQuery,
        variables: { id },
      }],
    })
  }
  const style = { textDecoration: completed ? 'line-through' : 'none' };
  return (
    <li className="todo-task" style={style} onClick={_toggleComplete}>{title}</li>
  )
};

/***** Apollo Wrapper *****/
export default compose(
  graphql(myTodoTaskQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
  graphql(toggleCompleteTodoTaskMutation, {
    props: ({ mutate }) => ({ toggleComplete: mutate }),
  }),
)(SingleTodoTask)
