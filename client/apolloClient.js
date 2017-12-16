import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache({
    dataIdFromObject: obj => obj.id,
  }),
});

export default apolloClient;
