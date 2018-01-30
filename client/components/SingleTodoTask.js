import React, { Component } from 'react';
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
export const SingleTodoTask = props => {
  if (!props.data.todoTaskById) return (<div>Loading...</div>)
  const { todoTaskById: { id, title, completed } } = props.data;
  const toggleCompleteStatus = props.toggleCompleteTodoTaskMutation;
  const _toggleComplete = async () => {
    const newCompletedStatus = !completed;
    await toggleCompleteStatus({
      variables: {
        id,
        completed: newCompletedStatus,
      },
      refetchQueries: [
        {
          query: myTodoTaskQuery,
          variables: { id, completed },
        },
      ],
    })
  }
  const style = { textDecoration: completed ? 'line-through' : 'none' };
  return (
    <li style={style} onClick={_toggleComplete}>{title}</li>
  )
}

export default compose(
  graphql(myTodoTaskQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
  graphql(toggleCompleteTodoTaskMutation, {
    props: ({ mutate }) => ({ toggleCompleteTodoTaskMutation: mutate }),
  }),
)(SingleTodoTask)
