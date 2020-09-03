import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import ClipLoader from "react-spinners/ClipLoader";
import {useRouter} from "next/router";
import GenericPage from '../../components/Core/GenericPage';
import PAGE_QUERY from "../../queries/PAGE_QUERY";

function Page(props) {
  const router = useRouter();
  const { subpage } = router.query;

  const { loading, data } = useQuery(PAGE_QUERY, {
    variables: {
      pageSlug: subpage,
    }
  });
  return (
    <App>
      <Layout>
          {loading ? (
            <ClipLoader />
          ): (
            <GenericPage data={data.pages.edges[0].node} />
          )}
      </Layout>
    </App>
  );
}

export default Page;
