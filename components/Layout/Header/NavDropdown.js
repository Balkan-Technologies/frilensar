import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Link from 'next/link';
import styled, {keyframes} from 'styled-components';


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

`;

const listAnimation = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const OptionList = styled(DropdownMenu)`
    &.dropdown-menu {
    min-width: 0;
    border-radius: 0;
    animation: ${listAnimation} 0.2s ease;
    overflow: hidden;
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
    >a,
    >a:link,
    >a:active,
    >a:hover {
      text-decoration: none !important;
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
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
        width: 97%;
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
                          <Link href={`/[page]/[subpage]/`} as={`${data.url}`}>
                            <a href={data.url}>
                              <OptionLink as="span">{data.label}</OptionLink>
                            </a>
                          </Link>
                        </OptionItem>
                    )
                })}
            </OptionList>
        </UncontrolledDropdown>

    )
}

export default DropdownMenuItem;
