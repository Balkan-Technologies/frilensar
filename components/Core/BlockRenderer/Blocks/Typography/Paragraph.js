import React from 'react';
import styled from 'styled-components';
import htmr from 'htmr';
const Element = styled.p`
  font-weight: lighter;
`;
const Paragraph = ({
 block: {
   attributes: {
     content,
   },
 }
}) => {
  if(!content) {
    return <Element>&nbsp;</Element>
  }
  return (
    <Element>{htmr(content)}</Element>
  )
};

export default Paragraph;
