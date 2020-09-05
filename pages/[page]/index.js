import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";
import PageLoadingIndicator from "../../components/Layout/GenericPage/PageLoadingIndicator";
import Head from "next/head";


function Page(props) {
  const router = useRouter();
  const { page } = router.query;
  const {
    Component,
    query,
    dataKeyName,
  } = getConfigForPage(page);

  const { loading, data } = useQuery(query, {
    variables: {
      pageSlug: page,
    }
  });

  return (
    <App>
      <Head>
        <title>Frilensar</title>
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

export default Page;
