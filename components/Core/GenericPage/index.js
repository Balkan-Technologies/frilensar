import React from 'react';
import BlockRenderer from "../BlockRenderer";

function Page({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      {blocks.map(block => (
        <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
      ))}
    </section>
  )
}

export default Page;
