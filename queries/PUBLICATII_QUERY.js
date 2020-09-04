import gql from "graphql-tag";

const PUBLICATII_QUERY = gql`
    query PublicatieQuery {
        publicatii {
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

export default PUBLICATII_QUERY
