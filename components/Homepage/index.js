import React from 'react';
import Layout from '../Layout';
import Carousel from './Carousel';
import ArticleList from './ArticleList';

function Homepage(props){
  return (
    <Layout>
      <Carousel />
      <ArticleList />
    </Layout>
  );
}

export default Homepage;
