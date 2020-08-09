import React from 'react';
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



const NAV_MENU_QUERY = gql`
query menu($id: ID!, $idType: MenuNodeIdTypeEnum){
    menu(id: $id, idType: $idType){
        id
        name
        menuItems{
          edges {
            node {
              id
              parentId
              path
              label
              childItems {
                edges {
                  node {
                    id
                    url
                    label
                  }
                }
              }
            }
          }
        }
      }
  }
`



const NavMenu = (props) => {
  const { loading, data } = useQuery(
    NAV_MENU_QUERY, {
    variables: {
      id: 2,
      idType: "DATABASE_ID"
    }
  });
  if (!data) {
    return null;
  }


  return (
    <div>
      <Navbar>
        <Nav>
          {buildWpMenuStructure(data.menu.menuItems.edges).map(menuItem => {
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
