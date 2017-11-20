import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <h1>Hello from React & Apollo!</h1>
  </ApolloProvider>,
  document.getElementById('app')
);
