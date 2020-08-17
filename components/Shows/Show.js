import React from 'react';
import Layout from "../Layout";
import BlockRenderer from "../Core/BlockRenderer";
import { Container } from 'reactstrap';

function Show({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        {blocks.map(block => (
          <BlockRenderer block={block} />
        ))}
      </Container>
    </Layout>
  )
}

export default Show;
