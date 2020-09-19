import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../../components/Layout";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import PAGE_QUERY from "../../../queries/PAGE_QUERY";
import Head from "next/head";
import {withTheme} from "styled-components";


function Page({ theme }) {
  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: 'echipa',
    }
  });

  return (
    <App>
      <Head>
        <title>Frilensar</title>
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
  );
}

export default withTheme(Page);
