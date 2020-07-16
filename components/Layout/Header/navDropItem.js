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

const DropdownMenuItem = (data) => {
    console.log(data);
    return (
        <UncontrolledDropdown>
            <DropdownToggle>
                {data.props.title}
            </DropdownToggle>
            <DropdownMenu right>
                {data.props.children.map(data => {
                    return (
                        <DropdownItem key={data.id}>
                            <Link href={`${data.slug}`}>
                                <a>{data.title}</a>
                            </Link>
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </UncontrolledDropdown>

    )
}

export default DropdownMenuItem; 