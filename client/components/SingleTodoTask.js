import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

// export const SingleTodoTask = ({ data }) => {
export class SingleTodoTask extends Component {

  state = {

  }

  render() {
    console.log('this.props', this.props);
    const data = this.props.data;

    if (!data.todoTaskById) return (<div>Loading...</div>)
    const { todoTaskById: { title, completed } } = data;
    const style = {
      textDecoration: completed ? 'line-through' : 'none',
    };
    return (
      <li style={style}>{title}</li>
    )
  }
}

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
      title
      text
      completed
    }
  }
`;

export default compose(
  graphql(myTodoTaskQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
  graphql(toggleCompleteTodoTaskMutation, {
    options: ({ id }) => ({ variables: { id } }),
    props: ({ mutate }) => ({ toggleCompleteTodoTaskMutation: mutate }),
  }),
)(SingleTodoTask)
