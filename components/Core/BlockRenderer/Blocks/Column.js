import React from 'react';
import { Col } from 'reactstrap';
import BlockRenderer from "../index";

function Column(props) {
  const { innerBlocks, totalColumns } = props;
  const lgColIndex = Math.floor(12 / totalColumns);

  return (
    <Col sm={12} lg={lgColIndex}>
      {innerBlocks.map(innerBlock => (
        <BlockRenderer block={innerBlock} />
      ))}
    </Col>
  );
}

export default Column;
