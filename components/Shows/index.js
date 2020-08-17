import React from 'react';
import Layout from "../Layout";

function Shows({ data }) {
  return (
    <Layout>
      <h1>Spectacole</h1>
      {data.spectacole.edges.map(({ node: show }) => (
        <div key={show.id}>
          <h2>{show.title}</h2>
        </div>
      ))}
    </Layout>
  )
}

export default Shows;
