// src/apollo/client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Lien vers l'API GraphQL (ici locale, adapte si tu as une autre URL)
const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql', // ton endpoint GraphQL
  credentials: 'include', 
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'network-only' },
    query: { fetchPolicy: 'network-only' },
  },
});
