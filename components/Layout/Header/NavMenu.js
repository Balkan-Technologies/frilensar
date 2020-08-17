import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import MenuItem from './MenuItem';
import DropdownMenuItem from './NavDropdown';
import {
  Navbar,
  Nav,
} from 'reactstrap';


const NavMenu = ({ menuItems }) => {
  return (
    <div>
      <Navbar>
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
      </Navbar>
    </div>
  )
};

export default NavMenu;
