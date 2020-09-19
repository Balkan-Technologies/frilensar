import React, { useState } from 'react';
import styled, {withTheme} from 'styled-components';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import MenuItem from './MenuItem';
import DropdownMenuItem from './NavDropdown';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';
import Link from "next/link";

const MobileLogo = styled.img`
max-width: 75%;
min-width: 75%;
`

const LogoWrapper = styled.a`
  display: inline-block;
`

const NavbarContent = styled.div`
  display: flex;
`;

const NavContent = styled.div`
  text-align: center;
  padding-top: 1em;
  &:after {
    width: 37%;
  }
`;

const Hamburger = styled(NavbarToggler)`
  border: 0 !important;
`;

const Wrapper = styled.div`
  margin: 0 -15px;
`;

const MobileNavMenu = ({ menuItems, theme }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => {
    setCollapsed(true)
  };

  if(!menuItems.menu) {
    return null;
  }
  return (
    <Wrapper>
      <Navbar color='faded' light>
        <NavbarContent>
          <Link href="/">
            <LogoWrapper href="/">
              <MobileLogo src={`/logos/${theme.assets.mainLogo}`} />
            </LogoWrapper>
          </Link>
          <Hamburger onClick={toggleNavbar} />
        </NavbarContent>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavContent>
                {buildWpMenuStructure(menuItems.menu.menuItems.edges).map(menuItem => {
                  if (menuItem.children.length === 0) {
                    return (
                      <MenuItem item={menuItem} key={menuItem.id} onClick={() => closeNavbar()}/>
                    )
                  } else {
                    return (
                      <DropdownMenuItem props={menuItem} key={menuItem.id} />
                    )
                  }
                })}
              </NavContent>
            </Nav>
          </Collapse>
      </Navbar>
    </Wrapper >
  )
};

export default withTheme(MobileNavMenu);
