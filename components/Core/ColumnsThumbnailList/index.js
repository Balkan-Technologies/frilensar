import React from 'react';
import styled from "styled-components";
import {breakpoint} from "styled-components-breakpoint";

const CardList = styled.ul`
  display: grid;
   ${breakpoint('tablet')`
    grid-template-columns: auto auto;
  `};
  
  ${breakpoint('desktop')`
    grid-template-columns: repeat(4, 1fr);
  `};
  align-items: center;
  grid-column-gap: 30px;
  list-style-type: none;
  padding: 0px;
  padding-top: 30px;
  margin: 0px;
`;

export const Card = styled.div`
margin-bottom: 30px;
cursor: pointer;

a { 
  text-decoration: none !important;
}
`;

function ColumnsThumbnailList({ children }) {
  return (
    <CardList>
      {children}
    </CardList>
  )
}

export default ColumnsThumbnailList;
