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
// import NavigationLink from './navItem';

const ToggleButton = styled(DropdownToggle)`
color: black;
padding: 2px;
position: relative;

/* &:after {
    content: '';
    background-color: #00c6b9;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -3px;
    width: 97%;
    height: 2px;
} */

&.active:after {
    display: block;
}

&:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

}
    
&.a {
        color: black;
        padding: 2px;
        position: relative;
    }

`

// const OptionItem = styled(DropdownItem)`




// `; 

const DropdownMenuItem = (data) => {
    console.log(data);
    return (
        <UncontrolledDropdown>
            <ToggleButton nav caret>
                {data.props.label}
            </ToggleButton>
            <DropdownMenu >
                {data.props.children.map(data => {
                    return (
                        <DropdownItem key={data.id}>
                            <Link href={`${data.url}`}>
                                <a>{data.label}</a>
                            </Link>
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </UncontrolledDropdown>

    )
}

export default DropdownMenuItem; 