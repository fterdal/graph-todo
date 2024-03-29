import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { meQuery } from '../SideBar';

/***** GraphQL *****/
const logoutMutation = gql`
  mutation {
    logout {
      id
    }
  }
`;

/***** React Component *****/
export class Logout extends Component {

  _logout = async () => {
    await this.props.logoutMutation({
      refetchQueries: [
        { query: meQuery },
      ],
    })
  }

  render() {
    const { _logout } = this;
    return (
      <a
        className="button auth-button"
        onClick={() => _logout()}>
        Logout
      </a>
    )
  }
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(logoutMutation, {
    props: ({ mutate }) => ({ logoutMutation: mutate }),
  }),
)(Logout)
