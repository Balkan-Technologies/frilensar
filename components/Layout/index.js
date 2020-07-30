import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header/index';

function Layout({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
