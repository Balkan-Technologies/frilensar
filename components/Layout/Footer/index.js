import FooterMenu from './footerMenu';
import { Container, Row, Col } from 'reactstrap';
import styled, {withTheme} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Logo = styled.img`
width: 100%;
margin-bottom: 1em;
`

const Icon = styled(FontAwesomeIcon)`
    color: white;
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`


const StyledContainer = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
margin-left: -30px;
margin-right: -30px;

padding: 30px 0;

`;
const Footer = ({ menuItems, theme }) => {
    return (
        <Container fluid>
            <StyledContainer >
                <Container>
                    <Row>
                        <Col lg={{ size: 2, offset: 0 }} >
                            <Logo src={`/logos/${theme.assets.secondaryLogo}`} />
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
                            <FooterMenu menuItems={menuItems.menu.menuItems}/>
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </Container>
    )
}

export default withTheme(Footer);

