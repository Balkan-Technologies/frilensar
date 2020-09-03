import gql from "graphql-tag";

const PAGE_QUERY = gql`
    query PageQuery($pageSlug: String!) {
        pages(where: { name: $pageSlug }, first: 1) {
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

export default PAGE_QUERY
