import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import Head from "next/head";

function Page({ data }) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <Head>
        <title>Frilensar | { title }</title>
      </Head>
      {blocks.map(block => (
        <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
      ))}
    </section>
  )
}

export default Page;
