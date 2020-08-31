import React from 'react';
import {useRouter} from "next/router";
import App from "../../components/App";
import Project from "../../components/Projects/Project";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";

// Folosim query-ul pentru proiecte pentru a putea cauta dupa slug
// In WPGraphql nu poti face query dupa slug pentru custom post types
const PROJECT_QUERY = gql`
    query Proiect($slug: String!) {
        proiecte(where: { name: $slug }, first: 1){
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

function ProjectPage(props) {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data} = useQuery(PROJECT_QUERY, {
    variables: {
      slug,
    }
  });

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <Project data={data.proiecte.edges[0].node} />
    </App>
  )
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

export default ProjectPage;
