import { Col } from 'reactstrap';
import styled from 'styled-components';
import { breakpoint } from "styled-components-breakpoint";

const MobileCol = styled(Col)`
${breakpoint('tablet')`
    display: none;
  `}

`

export default MobileCol;