import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout, {NAVIGATION_QUERY} from "../../../components/Layout";
import {useRouter} from "next/router";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import MEMBRU_ECHIPA_QUERY from "../../../queries/MEMBRU_ECHIPA_QUERY";
import Head from "next/head";
import {withTheme} from "styled-components";
import {initializeApollo} from "../../../lib/apolloClient";
import PAGE_QUERY from "../../../queries/PAGE_QUERY";


function Page({ theme }) {
  const router = useRouter();
  const { teamMemberSlug } = router.query;

  const { loading, data } = useQuery(MEMBRU_ECHIPA_QUERY, {
    variables: {
      teamMemberSlug,
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
          <GenericPage data={data.teamMembers.edges[0].node} />
        )}
      </Layout>
    </App>
  );
}

export async function getServerSideProps(props) {
    const domain = props.req.headers.host;
    const { teamMemberSlug } = props.query;
    const apolloClient = initializeApollo({}, { currentDomain: domain });

    await apolloClient.query({
        query: NAVIGATION_QUERY,
        variables: {
            id: 2,
            idType: "DATABASE_ID"
        }
    });

    await apolloClient.query({
        query: MEMBRU_ECHIPA_QUERY,
        variables: {
            teamMemberSlug,
        }
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
}


export default withTheme(Page);
