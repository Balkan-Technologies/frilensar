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

const MobileLogo = styled.img`
max-width: 65%;
min-width: 65%;
`

const MobileNavMenu = ({ menuItems, theme }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  if(!menuItems.menu) {
    return null;
  }
  return (
    <div>
      <Navbar color='faded' light>
        <MobileLogo src={`/logos/${theme.assets.mainLogo}`} />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {buildWpMenuStructure(menuItems.menu.menuItems.edges).map(menuItem => {
              if (menuItem.children.length === 0) {
                return (
                  <MenuItem props={menuItem} key={menuItem.id} />
                )
              } else {
                return (
                  <DropdownMenuItem props={menuItem} key={menuItem.id} />
                )
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  )
};

export default withTheme(MobileNavMenu);
