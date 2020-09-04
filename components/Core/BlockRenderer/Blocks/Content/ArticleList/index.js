import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import ArticleItem from './ArticleItem';
import ColumnsThumbnailList from "../ColumnsThumbnailList";
import {CircleLoader} from "react-spinners";
import {breakpoint} from "styled-components-breakpoint";
import styled, {withTheme} from 'styled-components';
import PUBLICATII_QUERY from "../../../../../../queries/PUBLICATII_QUERY";

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


const postTypesToQuery = {
  'publicatie': {
    query: PUBLICATII_QUERY,
    dataKeyName: 'publicatii',
  },
  '_default': {
    query: POSTS_QUERY,
    dataKeyName: 'posts',
  }
};

const getConfigByPostType = postType => {
  if(postType && postTypesToQuery.hasOwnProperty(postType)) {
    return {
      query: postTypesToQuery[postType].query,
      dataKeyName: postTypesToQuery[postType].dataKeyName,
      parentPath:'publicatii',
    }
  } else {
    return {
      query: postTypesToQuery._default.query,
      dataKeyName: postTypesToQuery._default.dataKeyName,
      parentPath:'blog',
    }
  }
}
const ArticleList = ({ block, theme }) => {
  const { attributes: { columns, category, postType } } = block;
  const { query, dataKeyName, parentPath } = getConfigByPostType(postType);

  const { loading, data } = useQuery(query, {
    variables: {
      category: category === 'all' ? null : category,
    }
  });

  console.log('data', data);
  return (
    <ColumnsThumbnailList columns={columns}>
      {loading && [...Array(parseInt(columns))].map((item, idx) => (
        <li key={`placeholder-${idx}`}>
          <LoadingPlaceholder>
            <CircleLoader color={theme.colors.primary}/>
          </LoadingPlaceholder>
        </li>
      ))}
      {data && data[dataKeyName].edges.map(post => {
        return (
          <li key={post.node.id} >
              <ArticleItem data={post.node} parentPath={parentPath}/>
          </li>
        )
      })
      }
    </ColumnsThumbnailList>
  )
}

export default withTheme(ArticleList);
