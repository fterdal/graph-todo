import React from 'react';
import { Redirect } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

/***** GraphQL *****/
export const meQuery = gql`
  query {
    me {
      id
    }
  }
`;

/***** React Component *****/
export const Home = ({ data }) => {
  if (data && data.me) return (<Redirect to="/lists" />);
  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  )
}

/***** Apollo Wrapper *****/
export default compose(
  graphql(meQuery),
)(Home)
