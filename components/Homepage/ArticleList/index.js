import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import ArticleItem from './ArticleItem';
import ColumnsThumbnailList from "../../Core/ColumnsThumbnailList";


const POSTS_QUERY = gql`
query{
    posts{
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

const ArticleList = (props) => {
  const { loading, data } = useQuery(POSTS_QUERY)
  if (!data) {
    return null;
  }

  return (
    <Container>
      <ColumnsThumbnailList>
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
