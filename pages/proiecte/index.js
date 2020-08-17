import React from 'react';
import App from "../../components/App";
import Projects from "../../components/Projects";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";

const PROJECTS_QUERY = gql`
    query Proiecte{
        proiecte {
            edges {
                node {
                    id
                    uri
                    title
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

function ProjectsPage(props) {
  const { loading, data } = useQuery(PROJECTS_QUERY);

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <Projects data={data}/>
    </App>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PROJECTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default ProjectsPage;
