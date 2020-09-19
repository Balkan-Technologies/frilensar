import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo} from '../lib/apolloClient';
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

App.getInitialProps = async (ctx) => {
  let currentDomain = null;
  if(typeof window !== 'undefined') {
    // HTTPS Redirect
    const httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if(httpTokens && process.env.NODE_ENV === 'production') {
      window.location.replace('https://' + httpTokens[1]);
    }
    currentDomain = location.hostname;
  } else {
    currentDomain = ctx.ctx.req.headers.host;
  }

  return {
    currentDomain,
    pageProps: {},
  };
}

export default App;
