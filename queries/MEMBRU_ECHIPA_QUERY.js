import gql from "graphql-tag";

const MEMBRU_ECHIPA_QUERY = gql`
    query PageQuery($teamMemberSlug: String!) {
        teamMembers(where: { name: $teamMemberSlug } ) {
            __typename
            edges {
                node {
                    __typename
                    id
                    title
                    uri
                    blocksJSON
                    slug
                }
            }
        }
    }
`;

export default MEMBRU_ECHIPA_QUERY
