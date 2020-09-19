import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import Head from "next/head";
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

function Page({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <Head>
        <title>Frilensar | { title }</title>
      </Head>
      <ContentWrapper>
        {blocks.map(block => (
          <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
        ))}
      </ContentWrapper>
    </section>
  )
}

export default Page;
