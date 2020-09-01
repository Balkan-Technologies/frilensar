import React from 'react';
import BlockRenderer from "../Core/BlockRenderer";

function About({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
   <section>
      <h1>{title}</h1>
      {blocks.map(block => (
        <BlockRenderer block={block}/>
      ))}
   </section>
  )
}

export default About;
