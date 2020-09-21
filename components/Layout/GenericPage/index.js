import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import Head from "next/head";
import styled, {withTheme} from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

function Page({ data, theme }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <Head>
        <title>{theme.seo.title} | { title }</title>
        <meta property="og:title" content={`Frilensar | ${title}`} />
      </Head>
      <ContentWrapper>
        {blocks.map(block => (
          <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
        ))}
      </ContentWrapper>
    </section>
  )
}

export default withTheme(Page);
