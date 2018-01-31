import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

/***** GraphQL *****/
const addTodoTaskMutation = gql`
  mutation addTodoTaskMutation($title: String, $text: String, $completed: Boolean) {
  	addTodoTask(input: {
      todoListId: 2
      input: {
        title: $title
        text: $text
        completed: $completed
      }
    }) {
      id
      todoTasks {
        id
        title
      }
    }
  }
`;

/***** React Component *****/
export class AddTodoTask extends Component {
  state = {}
  _addTodoTask = () => {

  }
  render() {
    if (this.hello) return {};
    return (<div />);
  }
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(addTodoTaskMutation, {
    // props: ({ data, mutate }) => ({data, addTodoTask: mutate}),
  }),
)(AddTodoTask)
