import React from 'react';
import App from "../../components/App";
import Projects from "../../components/Projects";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

const PROJECTS_QUERY = gql`
    query Proiecte{
        editii {
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

  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <Projects data={data.editii.edges}/>
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
    query: PROJECTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default ProjectsPage;
