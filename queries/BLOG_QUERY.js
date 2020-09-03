import gql from "graphql-tag";

const BLOG_QUERY = gql`
    query BlogQuery($pageSlug: String!) {
        posts(where: { name: $pageSlug }, first: 1) {
            __typename
            edges {
                node {
                    __typename
                    id
                    title
                    uri
                    blocksJSON
                    author {
                        node {
                            __typename
                            name
                        }
                    }
                }
            }
        }
    }
`;

export default BLOG_QUERY
