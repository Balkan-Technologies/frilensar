import React from 'react';
import Layout from "../Layout";
import FullWidthThumbnailList from "../Core/FullWidthThumbnailList";
import {Container} from "reactstrap";
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
`;
function Projects({ data }) {
  return (
    <Layout>
      <Container>
        <Heading>Proiecte</Heading>
        <FullWidthThumbnailList items={data.proiecte.edges} parentPath="proiecte"/>
      </Container>
    </Layout>
  )
}

export default Projects;
