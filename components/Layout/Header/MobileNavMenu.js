import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { object } from 'prop-types';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import MenuItem from './MenuItem';
import DropdownMenuItem from './NavDropdown';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const MobileLogo = styled.img`
max-width: 65%;
min-width: 65%;
`

const MobileNavMenu = ({ menuItems }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='faded' light>
        <MobileLogo src='/logo_frilensar-turqouise.png' />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
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
        </Collapse>
      </Navbar>
    </div >
  )
};

export default MobileNavMenu;
