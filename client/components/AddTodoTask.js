import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { myTodoListQuery } from './SingleTodoList';

/***** GraphQL *****/
export const addTodoTaskMutation = gql`
  mutation addTodoTaskMutation($id: Int!, $title: String, $text: String, $completed: Boolean) {
  	addTodoTask(input: {
      todoListId: $id
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
  state = {
    title: '',
    text: '',
    completed: false,
  }
  _addTodoTask = async () => {
    const { title, text, completed } = this.state;
    const { addTodoTask, id } = this.props;
    await addTodoTask({
      variables: {
        id,
        title,
        text,
        completed,
      },
      refetchQueries: [{
        query: myTodoListQuery,
        variables: { id },
      }],
    })
    this.setState({ title: '', text: '', completed: false });
  }
  render() {
    const { title, text, completed } = this.state;
    return (
      <div className="container">
        <form>
          <fieldset>
            <label>Add Task</label>
            <input
              id="titleField"
              type="text"
              placeholder="Title"
              value={title}
              onChange={evt => this.setState({ title: evt.target.value })}
            />
            <input
              id="textField"
              type="text"
              placeholder="Text"
              value={text}
              onChange={evt => this.setState({ text: evt.target.value })}
            />
            <label>Completed?</label>
            <input
              id="completedField"
              type="checkbox"
              value={completed}
              onChange={() => this.setState({ completed: !completed })}
            />
            <br />
            <a
              className="button button-outline"
              onClick={() => this._addTodoTask()}>
              Add
            </a>
          </fieldset>
        </form>
      </div>
    )
  }
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(addTodoTaskMutation, {
    props: ({ data, mutate }) => ({ data, addTodoTask: mutate }),
  }),
)(AddTodoTask)
