import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../../components/Layout";
import {Container} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import {useRouter} from "next/router";
import GenericPage from '../../components/Core/GenericPage';

const PAGE_QUERY = gql`
    query PageQuery($pageSlug: String!) {
        pages(where: { name: $pageSlug }, first: 1) {
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

function Page(props) {
  const router = useRouter();
  const { page } = router.query;

  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: page,
    }
  });

  return (
    <App>
      <Layout>
          {loading ? (
            <ClipLoader />
          ): (
            <GenericPage data={data.pages.edges[0].node} />
          )}
      </Layout>
    </App>
  );
}

export default Page;
