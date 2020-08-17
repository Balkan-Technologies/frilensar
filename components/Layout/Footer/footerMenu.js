import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { object } from 'prop-types';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import FooterMenuItem from './footerMenuItem';
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
    NavbarText,
    Row,
} from 'reactstrap';



const FOOTER_MENU_QUERY = gql`
query FooterMenu($id: ID!, $idType: MenuNodeIdTypeEnum){
    menu(id: $id, idType: $idType){
        __typename
        id
        name
        menuItems{
          edges {
            node {
              __typename
              id
              parentId
              path
              label
            }
        }
      }
    }
  }
`

const FooterMenuList = styled.ul`
    list-style-type: none;
    font-weight: 100;
    color: white;
`;

const FooterMenu = ({ menuItems }) => {
    return (
        <div>
            <FooterMenuList>
                {buildWpMenuStructure(menuItems.edges).map(menuItem => {
                    return (
                        <FooterMenuItem props={menuItem} key={menuItem.id} />
                    )
                })}
            </FooterMenuList>
        </div>
    )
};

export default FooterMenu;
