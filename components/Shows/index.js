import React from 'react';
import Layout from "../Layout";
import styled from "styled-components";
import {Container} from "reactstrap";
import FullWidthThumbnailList from "../Core/FullWidthThumbnailList";

const Heading = styled.h1`
  text-align: center;
`;

function Shows({ data }) {
  return (
    <Layout>
      <Heading>Spectacole</Heading>
      <Container>
        <FullWidthThumbnailList items={data.spectacole.edges} parentPath="spectacole" />
      </Container>
    </Layout>
  )
}

export default Shows;
