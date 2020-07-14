import App from '../components/App';
import { initializeApollo } from '../lib/apolloClient';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const ALL_POSTS_QUERY = gql`
query ceva{
    posts{
      edges{
        node{
          content
          title
          author{
            node{
              firstName
              id
              username
            }
          }
          date
          id        
        }
      }
    }
  }
  
`

const IndexPage = (props) => {
    const { loading, data } = useQuery(
        ALL_POSTS_QUERY
    )
        console.log(data);
    return (

        <App>

        </App>
    )
}




export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ALL_POSTS_QUERY,
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        unstable_revalidate: 1,
    }
}

export default IndexPage
