import React from 'react';
import App from "../../../components/App";
import About from "../../../components/About";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const PAGE_QUERY = gql`
    query Despre {
        pages(where: { name: "ceva" }, first: 1) {
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
function CevaPage(props) {
  const { loading, data } = useQuery(PAGE_QUERY);

  if(loading || !data) {
    return null;
  }
  return (
    <App>
      <About data={data.pages.edges[0].node} />
    </App>
  )
}

export default CevaPage;
