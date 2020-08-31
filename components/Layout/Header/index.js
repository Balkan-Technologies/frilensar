import React from 'react';
import NavMenu from './NavMenu';
import { Container, Row, Col } from 'reactstrap';
import styled, {withTheme} from 'styled-components';
import MobileNavMenu from './MobileNavMenu';
import DesktopCol from '../../Helpers/DesktopCol';
import MobileCol from '../../Helpers/MobileCol';
import Link from "next/link";

const Logo = styled.img`
    width: 100%;
    padding: 10px;
    padding-left: 0;
    margin-left: -3px;
    max-height: 140px;
`

const Header = ({ menuItems, theme }) => {
    return (
        <Container >
            <Row>
                <DesktopCol lg={3} md={3}>
                    <Link href="/">
                        <a href="/">
                            <Logo src={`/logos/${theme.assets.mainLogo}`} />
                        </a>
                    </Link>
                </DesktopCol>
                <DesktopCol lg={8} md={{size: 9, offset: 1}}>
                    <NavMenu menuItems={menuItems}/>
                </DesktopCol>
                <MobileCol>
                    <MobileNavMenu menuItems={menuItems}/>
                </MobileCol>
            </Row>
        </Container>
    )
}

export default withTheme(Header);
