import React from 'react';
import styled from "styled-components";
import {breakpoint} from "styled-components-breakpoint";

const CardList = styled.ul`
  display: grid;
   ${breakpoint('tablet')`
    grid-template-columns: auto auto;
  `};
  
  ${breakpoint('desktop')`
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
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

function ColumnsThumbnailList({ children, columns = 4 }) {
  return (
    <CardList columns={columns}>
      {children}
    </CardList>
  )
}

export default ColumnsThumbnailList;
