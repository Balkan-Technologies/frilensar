import React from 'react';
import {Container} from "reactstrap";
import Layout from "../Layout";
import BlockRenderer from "../Core/BlockRenderer";

function TeamMemberDetail({ data}) {
  const { title, blocksJSON } = data;
  const blocks = JSON.parse(blocksJSON);
  return (
    <section>
      <h1>{title}</h1>
      {blocks.map(block => (
        <BlockRenderer block={block} />
      ))}
    </section>
  );
}

export default TeamMemberDetail;
