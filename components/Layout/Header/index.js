import NavMenu from './NavMenu';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { breakpoint } from "styled-components-breakpoint";
import MobileNavMenu from './MobileNavMenu';

const Logo = styled.img`
width: 100%;
padding: 10px;
`
const DesktopCol = styled(Col)`
display: none;
${breakpoint('tablet')`
    display: initial;
  `}

`

const MobileCol = styled(Col)`
${breakpoint('tablet')`
    display: none;
  `}

`

const Header = () => {
    return (
        <Container >
            <Row>
                <DesktopCol lg={2} md={3}>
                    <Logo src='/logo_frilensar-turqouise.png' />
                </DesktopCol>
                <DesktopCol lg={{ size: 6, offset: 4 }} md={{size: 8, offset: 1}}>
                    <NavMenu />
                </DesktopCol>
                <MobileCol>
                    <MobileNavMenu />
                </MobileCol>

            </Row>
        </Container>
    )
}

export default Header;
