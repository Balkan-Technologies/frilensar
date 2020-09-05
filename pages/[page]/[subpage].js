import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";
import PageLoadingIndicator from "../../components/Core/GenericPage/PageLoadingIndicator";

function Page(props) {
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
