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
                    featuredImage{
                        node{
                            __typename
                            id
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

export default MEMBRU_ECHIPA_QUERY
