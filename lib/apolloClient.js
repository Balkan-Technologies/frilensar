import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import getActiveSiteEnv from '../config/env';

let apolloClient

const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData: { __schema: { types: [], }, }, });

function createApolloClient({ currentDomain }) {
  const ENV = getActiveSiteEnv(currentDomain);
  const API_URL = ENV.API_URL;
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: API_URL, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({ fragmentMatcher }),
  })
}

export function initializeApollo(initialState = null, { currentDomain }) {
  const _apolloClient = apolloClient ?? createApolloClient({ currentDomain })

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState});
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState, { currentDomain }) {
  const store = useMemo(() => initializeApollo(initialState, { currentDomain}), [initialState])
  return store
}
