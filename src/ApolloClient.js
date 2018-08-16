import 'isomorphic-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://nrcanapi.cds-snc.ca/graphql' }),
  cache: new InMemoryCache(),
  ssrMode: true,
})
