import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// import ArticleItem from './Item';
import ColumnsThumbnailList from "../ColumnsThumbnailList";
import {CircleLoader} from "react-spinners";
import {breakpoint} from "styled-components-breakpoint";
import styled, {withTheme} from 'styled-components';
import getConfigByPostType from "./config";


const LoadingPlaceholder = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  height: 240px;
  ${breakpoint('desktop')`
    height: 240px;
  `}
`;


const ItemsList = ({ block, theme }) => {
  const { attributes: { columns, category, postType } } = block;
  const { query, dataKeyName, parentPath, Component } = getConfigByPostType(postType);

  const { loading, data } = useQuery(query, {
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
      {data && data[dataKeyName].edges.map(post => {
        return (
          <li key={post.node.id} >
              <Component data={post.node} parentPath={parentPath}/>
          </li>
        )
      })
      }
    </ColumnsThumbnailList>
  )
}

export default withTheme(ItemsList);
