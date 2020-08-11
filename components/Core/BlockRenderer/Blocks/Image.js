import React from 'react';

const Image = ({
 block
}) => {
  return (
    <img src={block.attributes.url} />
  )
};

export default Image;
