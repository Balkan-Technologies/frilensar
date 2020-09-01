import React from 'react';
import App from "../../components/App";
import About from "../../components/About";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

const PAGE_QUERY = gql`
    query Despre {
        pages(where: { name: "despre" }, first: 1) {
            __typename
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
function AboutPage(props) {
  const { loading, data } = useQuery(PAGE_QUERY);

  return (
    <App>
      <Layout>
        <Container>
          {loading ? (
            <ClipLoader />
          ): (
            <About data={data.pages.edges[0].node} />
          )}
        </Container>
      </Layout>
    </App>
  );
}

export default AboutPage;
