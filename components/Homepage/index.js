import React from 'react';
import Layout from '../Layout';
import Carousel from './Carousel';
import Footer from '../Layout/Footer';


function Homepage(props){
  return (
    <Layout>
      <Carousel />
      <Footer />
    </Layout>
  );
}

export default Homepage;