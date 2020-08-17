import React from 'react';
import styled from 'styled-components';

const Element = styled.img`
  width: 100%;
`;
const Image = ({
 block
}) => {
  return (
    <Element src={block.attributes.url} />
  )
};

export default Image;
