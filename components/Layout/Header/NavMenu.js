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
`

const NavMenu = ({ menuItems }) => {
  return (
    <StyledNavbar>
      <Nav>
        {buildWpMenuStructure(menuItems.edges).map(menuItem => {
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
    </StyledNavbar>
  )
};

export default NavMenu;
