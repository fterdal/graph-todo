import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  login = async () => {
    const { email, password } = this.state
    await this.props.loginMutation({
      variables: {
        email,
        password
      },
      refetchQueries: [{
        query: meQuery,
      }],
    })
    this.state = {email: '', password: ''};
  }
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
          <input
            id="emailField"
            type="text"
            value={this.state.email}
            onChange={(evt) => this.setState({ email: evt.target.value })}
          />
          <label>Password</label>
          <input
            id="passwordField"
            type="password"
            value={this.state.password}
            onChange={(evt) => this.setState({ password: evt.target.value })}
          />
          <a
            className="button auth-button"
            onClick={() => this.login()}>
              Login
          </a>
        </fieldset>
      </form>
    )
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!){
    login(
      input: {
        email: $email,
        password: $password,
      }
    ) {
      id
      email
    }
  }
`;

export default compose(
  graphql(loginMutation, {
    props: ({ data, mutate }) => ({data, loginMutation: mutate}),
  }),
)(Login)
