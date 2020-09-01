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
    <section>
      <Heading>Spectacole</Heading>
      <FullWidthThumbnailList items={data} parentPath="spectacole" />
    </section>
  )
}

export default Shows;
