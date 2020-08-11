import React from 'react';
import styled from 'styled-components';
import convert from 'htmr';

const Element = styled.h1`
  /* color: ${({ theme }) => theme.colors.alternative}; */
  font-family: 'Charter', Serif, serif;
  font-weight: normal;
  margin-top: 70px;
  margin-bottom: 40px;
  font-weight: bold;
`;
const HeadingBlock = ({ attributes, ...rest }) => {
    const { content, level, align } = attributes;
    return <Element as={`h${level}`} style={{"text-align": align}}>
        {convert(content)}
        </Element>;
};

export default HeadingBlock;
