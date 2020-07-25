import React from 'react';
import { Container } from 'reactstrap';

function Layout({ children }) {
  return (
    <Container fluid>
      {children}
    </Container>
  );
}

export default Layout;
