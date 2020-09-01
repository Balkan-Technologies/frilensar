import React from 'react';
import App from "../../components/App";
import Blogs from "../../components/Blogs";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import Blog from "../../components/Blogs/Blog";

const BLOGS_QUERY = gql`
query Blogs{
    posts{
      __typename
        edges {
            node {
                __typename
                id
                uri
                title
                slug
                featuredImage {
                    node {
                        __typename
                        id
                        sourceUrl
                    }
                }
            }
        }
      }
    }    
`;

function BlogsPage(props) {
  const { loading, data } = useQuery(BLOGS_QUERY);

  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <Blogs data={data.posts.edges}/>
          )}
        </Container>
      </Layout>
    </App>
  )
}

export async function getServerSideProps(ctx) {
  const currentDomain = ctx.req.headers.host;
  const apolloClient = initializeApollo(null, { currentDomain });

  await apolloClient.query({
    query: BLOGS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default BlogsPage;
