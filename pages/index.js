import React from 'react';
import App from '../components/App'
import Layout from "../components/Layout";
import GenericPage from "../components/Layout/GenericPage";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import PageLoadingIndicator from "../components/Layout/GenericPage/PageLoadingIndicator";
import Head from "next/head";
import {withTheme} from "styled-components";

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


const IndexPage = ({ theme, ...rest })  => {
  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: "homepage",
    }
  });

  return (
    <App>
      <Head>
        <title>{theme.seo.title}</title>
        <link rel="shortcut icon" href={`/logos/${theme.assets.favicon}`} />
      </Head>
      <Layout isLoading={loading}>
          {loading ? (
            <PageLoadingIndicator />
          ): (
            <GenericPage data={data.pages.edges[0].node} />
          )}
      </Layout>
    </App>
  )
}

export default withTheme(IndexPage);
