import React from 'react';
import App from "../../components/App";
import Projects from "../../components/Projects";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import {CAROUSEL_QUERY} from "../../components/Homepage/Carousel";
import {NAV_MENU_QUERY} from "../../components/Layout/Header/NavMenu";

const PROJECTS_QUERY = gql`
    query Proiecte{
        proiecte {
            edges {
                node {
                    id
                    uri
                    title
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
