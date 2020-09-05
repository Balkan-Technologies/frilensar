import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts($category: String){
        posts(where: { categoryName: $category }){
            edges {
                node{
                    __typename
                    id
                    slug
                    title
                    link
                    date
                    author{
                        node{
                            __typename
                            name
                        }
                    }
                    excerpt(format: RENDERED)
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

export default POSTS_QUERY;
