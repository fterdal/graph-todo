import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';
import { Redirect } from 'react-router-dom';

/***** GraphQL *****/
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

/***** React Component *****/
export class Login extends Component {

  state = {
    email: '',
    password: '',
    loggedIn: false,
  }

  _login = async () => {
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
    this.setState({ loggedIn: true });
  }

  render() {
    const { _login, state: { email, password, loggedIn } } = this;
    if (loggedIn) return (<Redirect to="/" />)
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

/***** Apollo Wrapper *****/
export default compose(
  graphql(loginMutation, {
    props: ({ data, mutate }) => ({data, loginMutation: mutate}),
  }),
)(Login)
