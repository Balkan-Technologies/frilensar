import React from 'react';
import {useRouter} from "next/router";
import App from "../../components/App";
import Show from "../../components/Shows/Show";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import About from "../../components/About";

// Folosim query-ul pentru spectacole pentru a putea cauta dupa slug
// In WPGraphql nu poti face query dupa slug pentru custom post types
const SHOW_QUERY = gql`
    query Spectacol($slug: String!) {
        spectacole(where: { name: $slug }, first: 1){
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
function ShowPage(props) {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, data} = useQuery(SHOW_QUERY, {
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
            <Show data={data.spectacole.edges[0].node} />
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

export default ShowPage;
