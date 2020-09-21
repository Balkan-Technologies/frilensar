import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";
import PageLoadingIndicator from "../../components/Layout/GenericPage/PageLoadingIndicator";
import Head from "next/head";
import {withTheme} from "styled-components";
import {initializeApollo} from "../../lib/apolloClient";


function Page({ theme }) {
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
        <title>{theme.seo.title}</title>
        <link rel="shortcut icon" href={`/logos/${theme.assets.favicon}`} />
        <meta property="og:image" content={theme.seo.defaultCardImage} />
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

export async function getServerSideProps(props) {
  const domain = props.req.headers.host;
  const { page } = props.query;
  const pageConfig = getConfigForPage(page)
  const apolloClient = initializeApollo({}, { currentDomain: domain });
  await apolloClient.query({
    query: pageConfig.query,
    variables: {
      pageSlug: page,
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default withTheme(Page);
