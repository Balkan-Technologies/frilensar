import React from 'react';
import App from '../components/App'
import Homepage from '../components/Homepage';
import {initializeApollo} from "../lib/apolloClient";
import {CAROUSEL_QUERY} from "../components/Homepage/Carousel";
import {NAV_MENU_QUERY} from "../components/Layout/Header/NavMenu";

const IndexPage = () => (
  <App>
    <Homepage />
  </App>
)

export async function getServerSideProps(ctx) {
  const currentDomain = ctx.req.headers.host;
  const apolloClient = initializeApollo(null, { currentDomain });
  const cache = apolloClient.cache.extract();
  console.log('cache',JSON.stringify(cache) );
  return {
    props: {
      initialApolloState: cache,
    },
  }
}
//
// export async function getServerSideProps() {
//   const apolloClient = initializeApollo()
//   //
//   // await apolloClient.query({
//   //   query: CAROUSEL_QUERY,
//   // })
//   //
//   // await apolloClient.query({
//   //   query: NAV_MENU_QUERY,
//   //   variables: {
//   //     id: 2,
//   //     idType: "DATABASE_ID",
//   //   }
//   // })
//
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   }
// }

export default IndexPage
