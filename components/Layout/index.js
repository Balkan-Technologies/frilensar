import React from 'react';
import { Container } from 'reactstrap';

function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Layout;