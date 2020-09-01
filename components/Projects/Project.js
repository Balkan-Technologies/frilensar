import React from 'react';
import Layout from "../Layout";
import BlockRenderer from "../Core/BlockRenderer";
import { Container } from 'reactstrap';

function Project({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <h1>{title}</h1>
      {blocks.map(block => (
        <BlockRenderer block={block} />
      ))}
    </section>
  )
}

export default Project;
