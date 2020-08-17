import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "styled-components";
import {getActiveTheme} from "../config/themes";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={getActiveTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
