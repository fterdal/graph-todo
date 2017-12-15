import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  state = {
    loggedOut: false,
  }

  _logout = async () => {
    await this.props.logoutMutation({
      refetchQueries: [
        { query: meQuery },
      ],
    })
    this.setState({ loggedOut: true });
  }
  render() {
    const { _logout, state: { loggedOut } } = this;

    if (loggedOut) return (<Redirect to="/" />)

    return (
      <a
        className="button auth-button"
        onClick={() => _logout()}>
        Logout
      </a>
    )
  }
}

const logoutMutation = gql`
  mutation LogoutMutation(){
    logout {
      id
    }
  }
`;

export default compose(
  graphql(logoutMutation, {
    props: ({ data, mutate }) => ({data, logoutMutation: mutate}),
  }),
)(Logout)
