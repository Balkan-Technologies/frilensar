import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import ArticleItem from './ArticleItem';
import ColumnsThumbnailList from "../ColumnsThumbnailList";


const POSTS_QUERY = gql`
  query Posts($category: String){
    posts(where: { categoryName: $category }){
      nodes{
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
`;

const ArticleList = ({ block }) => {
  const { attributes: { columns, category } } = block;
  const { loading, data } = useQuery(POSTS_QUERY, {
    variables: {
      category: category === 'all' ? null : category,
    }
  });

  if (!data) {
    return null;
  }

  return (
    <Container>
      <ColumnsThumbnailList columns={columns}>
        {data.posts.nodes.map(post => {
          return (
            <li key={post.id} >
              <ArticleItem data={post} />
            </li>
          )
        })
        }
      </ColumnsThumbnailList>
    </Container>
  )
}

export default ArticleList;
