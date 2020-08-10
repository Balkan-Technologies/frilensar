import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header/index';
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
