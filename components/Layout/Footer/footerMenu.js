import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import FooterMenuItem from './footerMenuItem';
import {breakpoint} from "styled-components-breakpoint";

const FooterMenuList = styled.ul`
    list-style-type: none;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.light};
    margin: 0;
    padding: 0;
    margin-top: 1em;
    ${breakpoint('desktop')`
      margin-top: 0;
    `}
    
`;

const FooterMenu = ({ menuItems }) => {
    if(!menuItems.menu) {
      return null;
    }
    return (
        <div>
            <FooterMenuList>
                {buildWpMenuStructure(menuItems.menu.menuItems.edges).map(menuItem => {
                    return (
                        <FooterMenuItem props={menuItem} key={menuItem.id} />
                    )
                })}
            </FooterMenuList>
        </div>
    )
};

export default FooterMenu;
