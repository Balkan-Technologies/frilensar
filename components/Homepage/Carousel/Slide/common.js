import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {breakpoint} from "styled-components-breakpoint";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  color: inherit;
`;

const Title = styled.h2`
  font-size: 1em;
  ${breakpoint('desktop')`
    font-size: 2em;
  `};
`;

const TitleWrapper = styled.div`
  background: rgba(255,255,255,0.4);
  display: block;
  width: 100%;
  text-align: center;
  
  padding: 0.5em;
  ${breakpoint('desktop')`
    padding: 1em;
  `};
`;

const LinkContent = styled.a`
  &:link,
  &:active,
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
  }
`


function LinkedPost({ data }) {
  return (
    <Wrapper>
      <Link href={data.uri}>
        <LinkContent href={data.uri}>
          <Wrapper>
            <TitleWrapper>
              <Title>{data.title}</Title>
            </TitleWrapper>
          </Wrapper>
        </LinkContent>
      </Link>
    </Wrapper>
  );
}

export default LinkedPost;
