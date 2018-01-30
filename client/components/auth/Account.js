import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';

// This component isn't finished yet.
export class Account extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    successFailMessage: '',
  }

  _editUser = async () => {
    const { email, password } = this.state
    await this.props.loginMutation({
      variables: {
        email,
        password
      },
      refetchQueries: [
        { query: meQuery },
      ],
    })
  }

  render() {
    const { _login, state: { email, password, confirmPassword } } = this;
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <fieldset>
            <label>Email</label>
            <input
              id="emailField"
              type="text"
              value={email}
              onChange={(evt) => this.setState({ email: evt.target.value })}
            />
            <label>Password</label>
            <input
              id="passwordField"
              type="password"
              value={password}
              onChange={(evt) => this.setState({ password: evt.target.value })}
            />
            <label>Confirm Password</label>
            <input
              id="confirmPasswordField"
              type="password"
              value={confirmPassword}
              onChange={(evt) => this.setState({ password: evt.target.value })}
            />
            <a
              className="button auth-button"
              onClick={() => _login()}>
              Login
            </a>
          </fieldset>
        </form>
      </div>
    )
  }
}

const editUserMutation = gql`
  # edit user mutation goes here
`;

export default compose(
  graphql(editUserMutation, {
    props: ({ data, mutate }) => ({data, editUserMutation: mutate}),
  }),
)(Account)
