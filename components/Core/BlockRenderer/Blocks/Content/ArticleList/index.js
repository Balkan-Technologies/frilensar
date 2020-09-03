import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import ArticleItem from './ArticleItem';
import ColumnsThumbnailList from "../ColumnsThumbnailList";
import {CircleLoader} from "react-spinners";
import {breakpoint} from "styled-components-breakpoint";
import styled, {withTheme} from 'styled-components';

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

const LoadingPlaceholder = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpoint('desktop')`
    height: 240px;
  `}
`;
const ArticleList = ({ block, theme }) => {
  const { attributes: { columns, category } } = block;
  const { loading, data } = useQuery(POSTS_QUERY, {
    variables: {
      category: category === 'all' ? null : category,
    }
  });
  return (
    <ColumnsThumbnailList columns={columns}>
      {loading && [...Array(parseInt(columns))].map((item, idx) => (
        <li key={`placeholder-${idx}`}>
          <LoadingPlaceholder>
            <CircleLoader color={theme.colors.primary}/>
          </LoadingPlaceholder>
        </li>
      ))}
      {data && data.posts.nodes.map(post => {
        return (
          <li key={post.id} >
              <ArticleItem data={post} />
          </li>
        )
      })
      }
    </ColumnsThumbnailList>
  )
}

export default withTheme(ArticleList);
