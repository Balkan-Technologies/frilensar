import React from 'react';
import {useRouter} from "next/router";
import App from "../../components/App";
import Blog from "../../components/Blogs/Blog";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import About from "../../components/About";

// Folosim query-ul pentru spectacole pentru a putea cauta dupa slug
// In WPGraphql nu poti face query dupa slug pentru custom post types
const BLOG_QUERY = gql`
    query Spectacol($slug: String!) {
        publicatii(where: { name: $slug }, first: 1){
            edges {
                node {
                    __typename
                    id
                    title
                    uri
                    blocksJSON
                }
            }
        }
    }
`;
function BlogPage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, data} = useQuery(BLOG_QUERY, {
    variables: {
      slug,
    }
  });

  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <Blog data={data.posts.edges[0].node} />
          )}
        </Container>
      </Layout>
    </App>
  );
}

export async function getServerSideProps(ctx) {
  const currentDomain = ctx.req.headers.host;
  const apolloClient = initializeApollo(null, { currentDomain });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default BlogPage;
