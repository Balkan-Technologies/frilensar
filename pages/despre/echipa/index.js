import React from 'react';
import App from "../../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../../components/Layout";
import PageLoadingIndicator from "../../../components/Layout/GenericPage/PageLoadingIndicator";
import GenericPage from "../../../components/Layout/GenericPage";
import PAGE_QUERY from "../../../queries/PAGE_QUERY";


function Page(props) {
  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: 'echipa',
    }
  });

  return (
    <App>
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

export default Page;
