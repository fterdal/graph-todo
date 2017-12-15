import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';
import { Redirect } from 'react-router-dom';

class Signup extends Component {

  state = {
    email: '',
    password: '',
    signedUp: false,
  }

  _signup = async () => {
    const { email, password } = this.state
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
    const { _signup, state: { email, password, signedUp } } = this;

    if (signedUp) return (<Redirect to="/" />)

    return (
      <div className="container">
        <h1>Signup</h1>
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
              onClick={() => _signup()}>
              Signup
            </a>
          </fieldset>
        </form>
      </div>
    )
  }
}

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

export default compose(
  graphql(signupMutation, {
    props: ({ data, mutate }) => ({data, signupMutation: mutate}),
  }),
)(Signup)
