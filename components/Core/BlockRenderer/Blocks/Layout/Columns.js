import React from 'react';
import { Row, Col } from 'reactstrap';
import Column from "./Column";

function Columns(props) {
  const { innerBlocks } = props.block;
  const numberOfColumns = innerBlocks.length;
  if(!innerBlocks) {
    return null;
  }

  return (
    <Row>
      {innerBlocks.map(innerBlock => (
        <Column {...innerBlock} totalColumns={numberOfColumns} key={`${innerBlock.name}-${innerBlock.postId}-${innerBlock.order}`}/>
      ))}
    </Row>
  );
}

export default Columns;
