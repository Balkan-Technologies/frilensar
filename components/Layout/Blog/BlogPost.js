import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import {Container} from "reactstrap";
import moment from "moment";
import Head from "next/head";

function BlogPost({ data }) {
  const { title, date, blocksJSON, author: { node : { name }} } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <Head>
        <title>Frilensar | { title }</title>
      </Head>
      <Container>
        <h1>{title}</h1>
        <p>de {name} | {moment(date).format('DD.MM.YYYY')}</p>
      </Container>
      {blocks.map(block => (
        <BlockRenderer block={block}  key={`${block.name}-${block.postId}-${block.order}`}/>
      ))}
    </section>
  )
}

export default BlogPost;
