import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { myTodoListQuery } from './SingleTodoList';

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
export class SingleTodoTask extends Component {
  _toggleComplete = async () => {
    if (!this.props.data.todoTaskById) return; // Data hasn't been loaded yet
    let { todoTaskById: { id, completed } } = this.props.data;
    completed = !completed;
    await this.props.toggleCompleteTodoTaskMutation({
      variables: {
        id,
        completed,
      },
      refetchQueries: [
        {
          query: myTodoTaskQuery,
          variables: { id, completed },
        },
      ],
    })
  }
  render() {
    const data = this.props.data;
    if (!data.todoTaskById) return (<div>Loading...</div>)
    const { todoTaskById: { title, completed } } = data;
    const style = {
      textDecoration: completed ? 'line-through' : 'none',
    };
    return (
      <li style={style} onClick={this._toggleComplete}>{title}</li>
    )
  }
}

export default compose(
  graphql(myTodoTaskQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
  graphql(toggleCompleteTodoTaskMutation, {
    // options: ({ id }) => ({ variables: { todoTaskId: id, input:  } }),
    props: ({ mutate }) => ({ toggleCompleteTodoTaskMutation: mutate }),
  }),
)(SingleTodoTask)
