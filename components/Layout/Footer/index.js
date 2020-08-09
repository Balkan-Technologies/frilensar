import FooterMenu from './footerMenu';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Logo = styled.img`
width: 100%;

`

const Icon = styled(FontAwesomeIcon)`
color: white;
&:hover{
    color: #00c6b9;
}
`

const Footer = () => {
    return (
        <Container fluid>
            <StyledContainer >
                <Container>
                    <Row>
                        <Col>
                            <span>&nbsp;</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ size: 2, offset: 0 }} >
                            <Logo src='/logo_frilensar-white.png' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ size: 2, offset: 0 }} >
                            <a href="https://facebook.com">
                                <Icon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://youtube.com">
                                <Icon icon={faYoutube} size="2x" />
                            </a>
                        </Col>
                        <Col lg={{ size: 6, offset: 2 }} >
                            <FooterMenu />
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                </Container>
            </StyledContainer>
        </Container>
    )
}

const StyledContainer = styled.div`
background-color: #2c2c2c;
margin-left: -30px;
margin-right: -30px;

`;

export default Footer;

