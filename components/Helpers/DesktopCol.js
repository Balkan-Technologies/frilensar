import { Col } from 'reactstrap';
import styled from 'styled-components';
import { breakpoint } from "styled-components-breakpoint";

const DesktopCol = styled(Col)`
display: none;
${breakpoint('tablet')`
    display: initial;
  `}

`

export default DesktopCol;