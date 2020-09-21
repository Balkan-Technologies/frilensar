import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout, {NAVIGATION_QUERY} from "../../components/Layout";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";
import PageLoadingIndicator from "../../components/Layout/GenericPage/PageLoadingIndicator";
import Head from "next/head";
import {withTheme} from "styled-components";
import {initializeApollo} from "../../lib/apolloClient";

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

  const image = data && data[dataKeyName].edges[0].node.featuredImage && data[dataKeyName].edges[0].node.featuredImage.node.sourceUrl
  return (
    <App>
      <Head>
        <title>{theme.seo.title}</title>
        <link rel="shortcut icon" href={`/logos/${theme.assets.favicon}`} />
        <meta property="og:image" content={image || theme.seo.defaultCardImage} />
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
  const { page, subpage } = props.query;
  const pageConfig = getConfigForPage(page, subpage)
  const apolloClient = initializeApollo({}, { currentDomain: domain });
  await apolloClient.query({
    query: NAVIGATION_QUERY,
    variables: {
      id: 2,
      idType: "DATABASE_ID"
    }
  });

  await apolloClient.query({
    query: pageConfig.query,
    variables: {
      pageSlug: subpage,
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default withTheme(Page);
