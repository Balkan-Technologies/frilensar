import React, {useEffect} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo} from '../lib/apolloClient';
import Router from "next/router";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import getThemeForDomain from '../config/themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
});

function routeChangeStart() {
  console.log('route change start');
  NProgress.start();
}

function routeChangeStop() {
  NProgress.done();
}

const GlobalStyle = createGlobalStyle`
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.primary} !important;
    height: 3px !important;
  }
  #nprogress .peg {
    box-shadow: none !important;
  }
`
Router.events.on("routeChangeStart", routeChangeStart);
Router.events.on("routeChangeComplete", routeChangeStop);
Router.events.on("routeChangeError", routeChangeStop);


function App({ Component, pageProps, currentDomain, ...rest }) {
  const apolloClient = useApollo(pageProps.initialApolloState, { currentDomain })
  useEffect(() => {
    // HTTPS Redirect
    if(typeof window !== 'undefined') {
      const httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
      if(httpTokens && process.env.NODE_ENV === 'production' && window.location.href.indexOf('.local') === -1) {
        window.location.replace('https://' + httpTokens[1]);
      }
    }
  }, []);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={getThemeForDomain(currentDomain)}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

App.getInitialProps = async (ctx) => {
  let currentDomain = null;
  if(typeof window !== 'undefined') {
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
