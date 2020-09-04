import gql from "graphql-tag";

const PUBLICATIE_QUERY = gql`
    query PublicatiiQuery($pageSlug: String!) {
        publicatii(where: { name: $pageSlug }, first: 1) {
            __typename
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

export default PUBLICATIE_QUERY
