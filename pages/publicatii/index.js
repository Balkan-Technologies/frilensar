import React from 'react';
import App from "../../components/App";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Shows from "../../components/Shows";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import About from "../../components/About";

const BLOGS_QUERY = gql`
    query Spectacole{
        publicatii {
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

function PublicatiiPage(props) {
  const { loading, data } = useQuery(BLOGS_QUERY);

  if(loading || !data) {
    return null;
  }
  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <Shows data={data.publicatii.edges}/>
          )}
        </Container>
      </Layout>
    </App>
  );
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

export default PublicatiiPage;
