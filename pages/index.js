import App from '../components/App'

// import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <App>
    <h1>Caca</h1>
  </App>
)

// export async function getStaticProps() {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     unstable_revalidate: 1,
//   }
// }

export default IndexPage
