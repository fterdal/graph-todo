import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';
import { Redirect } from 'react-router-dom';

/***** GraphQL *****/
const signupMutation = gql`
  mutation SignupMutation($email: String!, $password: String!){
    signup(
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
export class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    signedUp: false,
    errorMessage: '',
  }

  _signup = async () => {
    const { email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      this.setState({
        password: '',
        confirmPassword: '',
        errorMessage: 'Password and Confirm Password must match',
      })
      return;
    }
    await this.props.signupMutation({
      variables: {
        email,
        password
      },
      refetchQueries: [
        { query: meQuery },
      ],
    })
    this.setState({ signedUp: true });
  }

  render() {
    const { _signup, state: {
      email,
      password,
      confirmPassword,
      signedUp,
      errorMessage,
    } } = this;
    if (signedUp) return (<Redirect to="/" />)
    const errorMsg = errorMessage ? <div className="container errorMsg">{errorMessage}</div>
                            : null
    return (
      <div className="container">
        <h1>Signup</h1>
        {errorMsg}
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
              onChange={(evt) => this.setState({ confirmPassword: evt.target.value })}
            />
            <a
              className="button auth-button"
              onClick={() => _signup()}>
              Signup
            </a>
          </fieldset>
        </form>
      </div>
    )
  }
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(signupMutation, {
    props: ({ data, mutate }) => ({ data, signupMutation: mutate }),
  }),
)(Signup)
