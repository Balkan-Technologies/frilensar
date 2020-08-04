import NavMenu from './NavMenu';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import MobileNavMenu from './MobileNavMenu';
import DesktopCol from '../../Helpers/DesktopCol';
import MobileCol from '../../Helpers/MobileCol';

const Logo = styled.img`
width: 100%;
padding: 10px;
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
