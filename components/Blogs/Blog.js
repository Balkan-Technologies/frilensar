import React from 'react';
import Layout from "../Layout";
import BlockRenderer from "../Core/BlockRenderer";
import { Container } from 'reactstrap';

function BlogPost({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  console.log(data);
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

export default BlogPost;
