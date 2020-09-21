import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";
import PageLoadingIndicator from "../../components/Layout/GenericPage/PageLoadingIndicator";
import Head from "next/head";
import {withTheme} from "styled-components";

function Page({ theme }) {
  const router = useRouter();
  const { page, subpage } = router.query;

  const {
    Component,
    query,
    dataKeyName,
  } = getConfigForPage(page, subpage);

  const { loading, data } = useQuery(query, {
    variables: {
      pageSlug: subpage,
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
          <Component data={data[dataKeyName].edges[0].node} />
        )}
      </Layout>
    </App>
  );
}

export default withTheme(Page);
