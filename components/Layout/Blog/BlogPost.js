import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import {Container} from "reactstrap";

function BlogPost({ data }) {
  const { title, blocksJSON, author: { node : { name }} } = data;
  const blocks = JSON.parse(blocksJSON);
  console.log('data', data);
  return (
    <section>
      <Container>
        <h1>{title}</h1>
        <p>De {name}</p>
      </Container>
      {blocks.map(block => (
        <BlockRenderer block={block}  key={`${block.name}-${block.postId}-${block.order}`}/>
      ))}
    </section>
  )
}

export default BlogPost;
