import React from 'react';
import App from "../../components/App";
import {useQuery} from "@apollo/react-hooks";
import Layout from "../../components/Layout";
import ClipLoader from "react-spinners/ClipLoader";
import {useRouter} from "next/router";
import getConfigForPage from "../../config/pages";


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
      <Layout>
          {loading ? (
            <ClipLoader />
          ): (
            <Component data={data[dataKeyName].edges[0].node} />
          )}
      </Layout>
    </App>
  );
}

export default Page;
