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

const FooterMenu = (props) => {
    const { loading, data } = useQuery(
        FOOTER_MENU_QUERY, {
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
            <FooterMenuList>
                {buildWpMenuStructure(data.menu.menuItems.edges).map(menuItem => {
                    return (
                        <FooterMenuItem props={menuItem} key={menuItem.id} />
                    )
                })}
            </FooterMenuList>
        </div>
    )
};

export default FooterMenu;
