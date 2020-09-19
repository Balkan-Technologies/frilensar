import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../../components/Layout";
import {useRouter} from "next/router";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import MEMBRU_ECHIPA_QUERY from "../../../queries/MEMBRU_ECHIPA_QUERY";
import Head from "next/head";
import {withTheme} from "styled-components";


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
        <title>Frilensar</title>
        <link rel="shortcut icon" href={`/logos/${theme.assets.favicon}`} />
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

export default withTheme(Page);
