import NavMenu from './navMenu';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Logo = styled.img`
width: 100%;

`


const Header = () => {
    return (
        <Container >
            <Row>
                <Col lg={{ size: 2, offset: 0}} >
                    <Logo src='/logo_frilensar-turqouise.png' />
                </Col>
                <Col lg={{ size: 6, offset: 4}} >
                    <NavMenu />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
