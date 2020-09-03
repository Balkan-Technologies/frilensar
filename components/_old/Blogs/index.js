import React from 'react';
import Layout from "../../Layout";
import FullWidthThumbnailList from "../../Core/BlockRenderer/Blocks/Content/FullWidthThumbnailList";
import {Container} from "reactstrap";
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
`;
function Blog({ data }) {
  return (
    <section>
      <Heading>Blog</Heading>
      <FullWidthThumbnailList items={data} parentPath="blog"/>
    </section>
  )
}

export default Blog;
