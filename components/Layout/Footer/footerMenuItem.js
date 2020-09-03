import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationLink = styled.a`
color: ${({ theme }) => theme.colors.light};
padding: 2px;
position: relative;
&a {
        color: white;
    }
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
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    cursor: pointer;

    &:after {
        display: block;
    }
}
`;

const FooterMenuItem = (data) => {
    return (
        <li>
            <Link href="/[page]/" as={`${data.props.path}`}>
                <NavigationLink>{data.props.label}</NavigationLink>
            </Link>
        </li>

    )
}

export default FooterMenuItem;
