import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationLink = styled.a`
color: white;
padding: 2px;
position: relative;
&a {
        color: white;
    }
&:after {
    content: '';
    background-color: #00c6b9;
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
    color: white;
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
            <Link href={`${data.props.path}`}>
                <NavigationLink>{data.props.label}</NavigationLink>
            </Link>
        </li>

    )
}

export default FooterMenuItem;
