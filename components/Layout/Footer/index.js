import FooterMenu from './footerMenu';
import { Container, Row, Col } from 'reactstrap';
import styled, {withTheme} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Logo = styled.img`
width: 100%;
margin-bottom: 1em;
`

const Icon = styled(FontAwesomeIcon)`
    color: white;
    transition: 0.2s ease color;
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
    margin-right: 0.4em;
`


const StyledContainer = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
margin-left: -30px;
margin-right: -30px;

padding: 30px 0;
`;

const LogoAFCN = styled.img`
  width: 100%;
`;

const Footer = ({ menuItems, theme }) => {
    return (
        <Container fluid>
            <StyledContainer >
                <Container>
                    {/*<Row>*/}
                    {/*    <Col lg={2} sm={6} xs={6}>*/}
                    {/*        <Logo src={`/logos/${theme.assets.secondaryLogo}`} />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    <Row>
                        <Col lg={2} >
                            <Logo src={`/logos/${theme.assets.secondaryLogo}`} />
                            <a href={theme.socialMediaLinks.fb}>
                                <Icon icon={faFacebook} size="2x" />
                            </a>
                            <a href={theme.socialMediaLinks.ig}>
                                <Icon icon={faInstagram} size="2x" />
                            </a>
                            <a href={theme.socialMediaLinks.yt}>
                                <Icon icon={faYoutube} size="2x" />
                            </a>
                        </Col>
                        <Col lg={{ size: 6, offset: 2 }} sm={6} xs={6}>
                            {/*{menuItems && <FooterMenu menuItems={menuItems}/>}*/}
                        </Col>
                        <Col>
                            <LogoAFCN src="/various/logo_afcn.jpg" />
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </Container>
    )
}

export default withTheme(Footer);

