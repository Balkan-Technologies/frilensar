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
font-weight: 200;
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

const MenuItem = (data) => {
    return (
        <NavLink>
            <Link href={`${data.props.path}`}>
                <NavigationLink>{data.props.label}</NavigationLink>
            </Link>
        </NavLink>

    )
}

export default MenuItem;
