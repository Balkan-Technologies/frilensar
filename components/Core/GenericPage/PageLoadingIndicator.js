import React from 'react';
import styled, {withTheme} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {CircleLoader} from "react-spinners";

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicator = ({ theme }) => {
  return (
    <LoadingPlaceholder>
      <Fade>
        <CircleLoader color={theme.colors.primary} />
      </Fade>
    </LoadingPlaceholder>
  )
}

export default withTheme(LoadingIndicator);
