import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout, {NAVIGATION_QUERY} from "../../../components/Layout";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import PAGE_QUERY from "../../../queries/PAGE_QUERY";
import Head from "next/head";
import {withTheme} from "styled-components";
import getConfigForPage from "../../../config/pages";
import {initializeApollo} from "../../../lib/apolloClient";


function Page({ theme }) {
  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: 'echipa',
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
          <GenericPage data={data.pages.edges[0].node} />
        )}
      </Layout>
    </App>
  );
}


export async function getServerSideProps(props) {
    const domain = props.req.headers.host;
    const { page } = props.query;
    const apolloClient = initializeApollo({}, { currentDomain: domain });

    await apolloClient.query({
        query: NAVIGATION_QUERY,
        variables: {
            id: 2,
            idType: "DATABASE_ID"
        }
    });

    await apolloClient.query({
        query: PAGE_QUERY,
        variables: {
            pageSlug: 'echipa',
        }
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
}

export default withTheme(Page);
