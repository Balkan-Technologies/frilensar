import React from 'react';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import MenuItem from './MenuItem';
import DropdownMenuItem from './NavDropdown';
import {
  Navbar,
  Nav,
} from 'reactstrap';
import styled from 'styled-components';
const StyledNavbar = styled(Navbar)`
  height: 100%;
  justify-content: flex-end;
`

const NavMenu = ({ menuItems }) => {
  if(!menuItems.menu) {
    return null;
  }
  return (
    <StyledNavbar>
      <Nav>
        {buildWpMenuStructure(menuItems.menu.menuItems.edges).map(menuItem => {
          if (menuItem.children.length === 0) {
            return (
              <MenuItem item={menuItem} key={menuItem.id} />
            )
          } else {
            return (
              <DropdownMenuItem props={menuItem} key={menuItem.id} />
            )
          }
        })}
      </Nav>
    </StyledNavbar>
  )
};

export default NavMenu;
