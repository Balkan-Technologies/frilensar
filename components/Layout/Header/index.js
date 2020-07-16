import NavMenu from './navMenu';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const Logo = styled.img`
width: 10%;

`


const Header = () => {
    return (
        <Container>
            <Logo src='./logo_frilensar-turqouise.png' />
            <NavMenu />
        </Container>
    )
}

export default Header;
