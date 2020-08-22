import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "styled-components";
import getThemeForDomain from '../config/themes';

function App({ Component, pageProps, currentDomain, ...rest }) {
  const apolloClient = useApollo(pageProps.initialApolloState, { currentDomain })

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={getThemeForDomain(currentDomain)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

App.getInitialProps = async ({ ctx }) => {
  return {
    currentDomain: ctx.req.headers.host,
    pageProps: {},
  };
}

export default App;
