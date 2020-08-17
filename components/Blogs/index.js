import React from 'react';
import Layout from "../Layout";
import FullWidthThumbnailList from "../Core/FullWidthThumbnailList";
import {Container} from "reactstrap";
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
`;
function Blog({ data }) {
  return (
    <Layout>
      <Container>
        <Heading>Blog</Heading>
        <FullWidthThumbnailList items={data.posts.edges} parentPath="blog"/>
      </Container>
    </Layout>
  )
}

export default Blog;
