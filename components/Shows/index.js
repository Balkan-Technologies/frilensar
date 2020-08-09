import React from 'react';
import Layout from "../Layout";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";

const SHOWS_QUERY = gql`
  query Spectacole{
      spectacole {
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

function Shows(props) {
  const { loading, data } = useQuery(SHOWS_QUERY);

  if(!data) {
    return null;
  }

  return (
    <Layout>
      <h1>Spectacole</h1>
      {data.spectacole.edges.map(({ node: show }) => (
        <div>
          <h2>{show.title}</h2>
        </div>
      ))}
    </Layout>
  )
}

export default Shows;
