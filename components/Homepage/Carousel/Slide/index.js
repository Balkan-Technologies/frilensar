import React from 'react';
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";

function Slide({ type, ...props }) {
  switch(type) {
    case 'video':
      return <VideoSlide {...props} />
    default:
      return <ImageSlide {...props} />
  }
}

export default Slide;
