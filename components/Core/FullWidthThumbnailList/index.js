import React from 'react';
import styled, { css } from "styled-components";
import Link from "next/link";
import {breakpoint} from "styled-components-breakpoint";

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  a {
    text-decoration: none !important;
  }
`;

const Item = styled.li`
  width: 100%;
  min-height: 200px;
  ${breakpoint('desktop')`
    min-height: 400px;
  `};
  background-image: url(${({ data, theme }) => data.featuredImage ? data.featuredImage.node.sourceUrl : `/various/${theme.assets.placeholder}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  ${({ data }) => data && !data.featuredImage && css`
    // No featured image css
    background-size: 40%;
    background-color: ${({ theme }) => theme.colors.secondary};
  `};
  
  margin: 1.5em 0;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ItemTitleWrapper = styled.div`
  background: rgba(255,255,255,0.4);
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  ${breakpoint('desktop')`
    padding: 1em;
    font-size: 1.5em;
  `};
  color: ${({ theme }) => theme.colors.dark};
`;

function FullWidthThumbnailList({ items, parentPath, ...props}) {
  return (
    <Wrapper>
      {items.map(item => (
        <Link href={`/${parentPath}/[slug]`} as={`/${parentPath}/${item.node.slug}`}>
          <a>
            <Item key={item.node.id} data={item.node}>
              <ItemTitleWrapper>
                {item.node.title}
              </ItemTitleWrapper>
            </Item>
          </a>
        </Link>
      ))}
    </Wrapper>
  )
}

export default FullWidthThumbnailList;
