import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import buildWpMenuStructure from '../../Helpers/buildWpMenuStructure';
import FooterMenuItem from './footerMenuItem';

const FooterMenuList = styled.ul`
    list-style-type: none;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.light};
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
