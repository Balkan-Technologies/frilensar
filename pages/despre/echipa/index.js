import React from 'react';
import App from "../../../components/App";
import TeamListing from "../../../components/About/TeamListing";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {initializeApollo} from "../../../lib/apolloClient";
import Layout from "../../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import About from "../../../components/About";

const QUERY = gql`
    query Echipa {
        teamMembers {
            edges {
                node {
                    title
                    slug
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

  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <TeamListing data={data.teamMembers.edges} />
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


export default Echipa;
