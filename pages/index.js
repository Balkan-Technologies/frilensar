import App from '../components/App'
import Homepage from '../components/Homepage';
// import { initializeApollo } from '../lib/apolloClient'

const IndexPage = () => (
  <App>
    <Homepage />
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
