import React from 'react';
import styled from 'styled-components';
import LinkedPost from "./common";

const Wrapper = styled.div``;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

function ImageSlide(props) {
  const imgSource = props.articlesCustomFields.carouselSlideItemAttachment.sourceUrl;
  const linkedPost = props.articlesCustomFields.carouselSlideItemLinkedPost;

  return (
    <Wrapper>
      <Image src={imgSource} />
      {linkedPost && (
        <LinkedPost data={linkedPost} />
      )}
    </Wrapper>
  );
}

export default ImageSlide;
