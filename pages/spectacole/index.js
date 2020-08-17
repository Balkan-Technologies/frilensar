import React from 'react';
import App from "../../components/App";
import Shows from "../../components/Shows";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";

const SHOWS_QUERY = gql`
    query Spectacole{
        spectacole {
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

function ShowsPage(props) {
  const { loading, data } = useQuery(SHOWS_QUERY);

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <Shows data={data}/>
    </App>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: SHOWS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default ShowsPage;
