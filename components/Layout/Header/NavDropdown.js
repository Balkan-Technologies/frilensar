import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';


const ToggleButton = styled(DropdownToggle)`
color: ${({ theme }) => theme.colors.dark};
position: relative;
line-height: 1;

&.active:after {
    display: block;
}

&:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

}

`
const OptionList = styled(DropdownMenu)`
    &.dropdown-menu {
    min-width: 0;
    border-radius: 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
    }
  }
`;

const OptionItem = styled(DropdownItem)`
    &.dropdown-item, 
    &.dropdown-item:active,
    &.dropdown-item:focus,
    &.dropdown-item:focus:active,
    &.dropdown-item:hover {
      color: inherit;
      background-color: ${({ theme }) => theme.colors.light};
      border: none;
      outline: none;
    }
`;

const OptionLink = styled.a`
color: ${({ theme }) => theme.colors.dark} !important;
position: relative;
font-size: 16px;
font-weight: 400;

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
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
        display: block;
    }
}
`;

const DropdownMenuItem = (data) => {
    return (
        <UncontrolledDropdown>
            <ToggleButton nav caret>
                <OptionLink as="span">{data.props.label}</OptionLink>
            </ToggleButton>
            <OptionList >
                {data.props.children.map(data => {
                    return (
                        <OptionItem key={data.id}>
                          {data.isStaticRoute ? (
                            <Link href={`${data.url}/`}>
                              <a href={data.url}>
                                <OptionLink as="span">{data.label}</OptionLink>
                              </a>
                            </Link>
                          ) : (
                            <Link href={`/${data.parentPath}/[slug]`} as={`${data.url}`}>
                              <a href={data.url}>
                                <OptionLink as="span">{data.label}</OptionLink>
                              </a>
                            </Link>
                          )}
                        </OptionItem>
                    )
                })}
            </OptionList>
        </UncontrolledDropdown>

    )
}

export default DropdownMenuItem;
