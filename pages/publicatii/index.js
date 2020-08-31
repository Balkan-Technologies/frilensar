import React from 'react';
import App from "../../components/App";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../lib/apolloClient";
import Shows from "../../components/Shows";

const BLOGS_QUERY = gql`
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

function PublicatiiPage(props) {
  const { loading, data } = useQuery(BLOGS_QUERY);

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <Shows data={data}/>
    </App>
  )
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
