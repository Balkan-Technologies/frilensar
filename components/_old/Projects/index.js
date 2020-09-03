import React from 'react';
import Layout from "../../Layout";
import FullWidthThumbnailList from "../../Core/BlockRenderer/Blocks/Content/FullWidthThumbnailList";
import {Container} from "reactstrap";
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
`;
function Projects({ data }) {
  return (
    <section>
      <Heading>Proiecte</Heading>
      <FullWidthThumbnailList items={data} parentPath="proiecte"/>
    </section>
  )
}

export default Projects;
