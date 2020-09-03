import React from 'react';
import {
    NavLink,
} from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationLink = styled.div`
color: ${({ theme }) => theme.colors.dark};
height: 18px;
line-height: 1;
position: relative;
font-weight: 400;
font-size: 16px;

&:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.primary};
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -3px;
    width: 97%;
    height: 2px;
}

&.active:after {
    display: block;
}

&:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
        display: block;
    }
}
`;

const LinkWrapper = styled.span`
>a, 
>a:link,
>a:hover,
>a:active {
  text-decoration: none !important;
  color: inherit !important;
}
`;

const MenuItem = (data) => {
    return (
        <NavLink tag="span">
            <Link href="/[page]/" as={`${data.props.path}`}>
              <LinkWrapper>
                <a href={data.props.path}>
                  <NavigationLink>{data.props.label}</NavigationLink>
                </a>
              </LinkWrapper>
            </Link>
        </NavLink>

    )
}

export default MenuItem;
