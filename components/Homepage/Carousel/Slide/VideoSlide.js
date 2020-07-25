import React, {useRef, useEffect } from 'react';
import styled from "styled-components";
import LinkedPost from "./common";

const Wrapper = styled.div``;
const Video = styled.video`
  object-fit: contain;
  width: 100%;
`;
function VideoSlide(props) {
  const playerRef = useRef(null);
  const videoSrc = props.articlesCustomFields.carouselSlideItemAttachment.mediaItemUrl;
  const linkedPost = props.articlesCustomFields.carouselSlideItemLinkedPost;

  useEffect(() => {
    if (playerRef && playerRef.current) {
      playerRef.current.play();
    }
    return () => playerRef.current && playerRef.current.pause();
  }, [playerRef]);
  return (
    <Wrapper>

      <Video autoplay loop muted preload ref={playerRef}>
        <source src={videoSrc} />
      </Video>
      {linkedPost && (
        <LinkedPost data={linkedPost} />
      )}
    </Wrapper>
  )
}

export default VideoSlide;
