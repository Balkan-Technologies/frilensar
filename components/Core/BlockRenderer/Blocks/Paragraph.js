import React from 'react';

const Paragraph = ({
 block
}) => {
  return (
    <p>{block.attributes.content}</p>
  )
};

export default Paragraph;
