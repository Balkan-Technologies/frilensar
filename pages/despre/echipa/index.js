import React from 'react';
import App from "../../../components/App";
import TeamListing from "../../../components/About/TeamListing";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../../lib/apolloClient";

const QUERY = gql`
    query Echipa {
        teamMembers {
            edges {
                node {
                    title
                    featuredImage {
                        node {
                            srcSet
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

function Echipa() {
  const {loading, data} = useQuery(QUERY);

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <TeamListing data={data} />
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


export default Echipa;
