import React from 'react';
import styled from 'styled-components';

const Element = styled.p`
  font-weight: lighter;
`;
const Paragraph = ({
 block
}) => {
  return (
    <Element>{block.attributes.content}</Element>
  )
};

export default Paragraph;
