import React from 'react';
import Layout from "../Layout";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";

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

function Projects(props) {
  const { loading, data } = useQuery(PROJECTS_QUERY);

  if(!data) {
    return null;
  }

  return (
    <Layout>
      <h1>Proiecte</h1>
      {data.proiecte.edges.map(({ node: project }) => (
        <div>
          <h2>{project.title}</h2>
        </div>
      ))}
    </Layout>
  )
}

export default Projects;
