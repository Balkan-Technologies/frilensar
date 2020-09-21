import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import {Container} from "reactstrap";
import moment from "moment";
import Head from "next/head";
import styled, {withTheme} from "styled-components";

const ContentWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

function BlogPost({ data, theme }) {
  const { title, date, featuredImage, blocksJSON, author: { node : { name }} } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <Head>
        <title>{theme.seo.title} | { title }</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={featuredImage.node.sourceUrl} />
      </Head>
      <ContentWrapper>
        <Container>
          <h1>{title}</h1>
          <p>de {name} | {moment(date).format('DD.MM.YYYY')}</p>
        </Container>
        {blocks.map(block => (
          <BlockRenderer block={block}  key={`${block.name}-${block.postId}-${block.order}`}/>
        ))}
      </ContentWrapper>
    </section>
  )
}

export default withTheme(BlogPost);
