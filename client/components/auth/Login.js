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
      update: (store, { data }) => {
        console.log('store', store);
        console.log('data', data);
        // const data = store.readQuery({ query: ALL_LINKS_QUERY })
        // data.allLinks.splice(0, 0, createLink)
        // store.writeQuery({
        //   query: ALL_LINKS_QUERY,
        //   data
        // })
      }
    })
    // await this.props.meQuery();
    this.state = {email: '', password: ''};
  }
  render() {
    // console.log('this.props', this.props);
    console.log('this.props', this.props);
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

// const meQuery = gql`
//   query {
//     me {
//       id
//       email
//     }
//   }
// `;

export default compose(
  graphql(loginMutation, {
    props: ({ data, mutate }) => ({data, loginMutation: mutate}),
  }),
  // graphql(meQuery, {
  //   name: 'meQuery',
  // }),
)(Login)
// export default graphql(loginMutation, { name: 'loginMutation' })(Login)
