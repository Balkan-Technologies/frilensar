import React from 'react';
import BlockRenderer from "../Core/BlockRenderer";

function BlogPost({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <h1>{title}</h1>
      {blocks.map(block => (
        <BlockRenderer block={block}  key={`${block.name}-${block.postId}-${block.order}`}/>
      ))}
    </section>
  )
}

export default BlogPost;
