import React from 'react';
import Layout from '../../Layout';
import Carousel from '../../Core/BlockRenderer/Blocks/Media/Carousel';
import ArticleList from '../../Core/BlockRenderer/Blocks/Content/ItemsList';

function Homepage(props){
  return (
    <Layout>
      <Carousel />
      <ArticleList />
    </Layout>
  );
}

export default Homepage;


