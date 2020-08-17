import React from 'react';
import Layout from "../Layout";

function Projects({ data }) {
  return (
    <Layout>
      <h1>Proiecte</h1>
      {data.proiecte.edges.map(({ node: project }) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
        </div>
      ))}
    </Layout>
  )
}

export default Projects;
