import React from 'react';
import styled from 'styled-components';
import htmr from 'htmr';

const Element = styled.blockquote`
  position: relative;
  font-size: 20px;
  > p {
    font-style: italic;
  }
 
`;

const Blockquote = ({ block, ...rest }) => {
    return (
    <Element>
        {htmr(block.attributes.value)}
    </Element>
)};

export default Blockquote;
