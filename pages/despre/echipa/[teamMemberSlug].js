import React from 'react';
import {useRouter} from "next/router";
import {initializeApollo} from "../../../lib/apolloClient";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import App from "../../../components/App";
import TeamMemberDetail from "../../../components/About/TeamMemberDetail";

const TEAM_MEMBER_QUERY = gql`
    query TeamMember($slug: String!) {
        teamMembers(where: { name: $slug }, first: 1) {
            edges {
                node {
                    __typename
                    id
                    title
                    uri
                    blocksJSON
                }
            }
        }
    }
`;

function MemberDetailPage(props) {
  const router = useRouter();
  const { teamMemberSlug } = router.query;

  const { loading, data} = useQuery(TEAM_MEMBER_QUERY, {
    variables: {
      slug: teamMemberSlug,
    }
  });

  if(loading || !data) {
    return null;
  }

  return (
    <App>
      <TeamMemberDetail data={data.teamMembers.edges[0].node}/>
    </App>
  );
}

export async function getServerSideProps(ctx) {
  const currentDomain = ctx.req.headers.host;
  const apolloClient = initializeApollo(null, { currentDomain });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default MemberDetailPage;
