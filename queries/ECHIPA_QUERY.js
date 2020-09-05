import gql from "graphql-tag";

const ECHIPA_QUERY = gql`
    query PageQuery {
        teamMembers {
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

export default ECHIPA_QUERY
