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

 const MenuItem = (data) => {
     console.log(data);
    return (
        <NavItem>
            <Link href={`${data.props.slug}`}>
                <a>{data.props.title}</a>
            </Link>
        </NavItem>    

    )
  }

  export default MenuItem; 