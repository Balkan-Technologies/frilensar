import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../../components/Layout";
import {useRouter} from "next/router";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import MEMBRU_ECHIPA_QUERY from "../../../queries/MEMBRU_ECHIPA_QUERY";


function Page(props) {
  const router = useRouter();
  const { teamMemberSlug } = router.query;

  const { loading, data } = useQuery(MEMBRU_ECHIPA_QUERY, {
    variables: {
      teamMemberSlug,
    }
  });

  return (
    <App>
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

export default Page;
