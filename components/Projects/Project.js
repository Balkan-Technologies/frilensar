import React from 'react';
import Layout from "../Layout";
import BlockRenderer from "../Core/BlockRenderer";

function Project({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <Layout>
      <h1>{title}</h1>
      {blocks.map(block => (
        <BlockRenderer block={block}/>
      ))}
    </Layout>
  )
}

export default Project;
