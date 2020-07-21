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
    NavbarText
} from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationLink = styled.a`
color: black;
padding: 2px;
position: relative;

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
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
        display: block;
    }
}
`;

const MenuItem = (data) => {
    console.log(data);
    return (
        <NavLink>
            <Link href={`${data.props.path}`}>
                <NavigationLink>{data.props.label}</NavigationLink>
            </Link>
        </NavLink>

    )
}

export default MenuItem; 