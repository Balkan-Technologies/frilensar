import NavMenu from './navMenu';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Logo = styled.img`
width: 100%;

`


const Header = () => {
    return (
        <Container>
            <Row>
                <Col lg={2} sm={12}>
                    <Logo src='/logo_frilensar-turqouise.png' />
                </Col>
                <Col lg={8} >
                    <NavMenu />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
