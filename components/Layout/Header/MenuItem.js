import React from 'react';
import {
    NavLink,
} from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import {breakpoint} from "styled-components-breakpoint";

const NavigationLink = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  height: 18px;
  line-height: 1;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  ${breakpoint('desktop')`
    display: block;
  `};
  
  &:after {
      content: '';
      background-color: ${({ theme }) => theme.colors.primary};
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3px;
      width: 0;
      height: 2px;
      transition: 0.2s ease width;
  }
  
  &.active:after {
      display: block;
  }
  
  &:hover {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
  
      &:after {
          width: 97%;
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

const MenuItem = ({ item, onClick }) => {
    return (
        <NavLink tag="span">
            <Link href="/[page]/" as={`${item.path}`}>
              <LinkWrapper>
                <a href={item.path}>
                  <NavigationLink onClick={onClick}>{item.label}</NavigationLink>
                </a>
              </LinkWrapper>
            </Link>
        </NavLink>

    )
}

export default MenuItem;
