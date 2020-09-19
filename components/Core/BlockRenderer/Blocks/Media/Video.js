import React from 'react';
import styled from 'styled-components';
import convert from 'htmr';

const Wrapper = styled.div`
  video {
    width: 100%;
  }
`;

function VideoBlock(props) {
  return (
    <Wrapper>
      <video controls controlsList="nodownload">
        <source src={props.block.src} type="video/mp4"/> 
      </video>
    </Wrapper>
  );
}

export default VideoBlock;
