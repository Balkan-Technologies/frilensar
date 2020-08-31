import React from 'react';
import Layout from "../Layout";
import {Container} from "reactstrap";
import ColumnsThumbnailList, {Card} from '../../components/Core/ColumnsThumbnailList';

function TeamListing({ data }) {
  return (
    <Layout>
      <Container>
        <ColumnsThumbnailList>
          {data.teamMembers.edges.map(({ node }) => (
            <Card>
              {console.log('node', node)}
              {node.title}
            </Card>
          ))}
        </ColumnsThumbnailList>
      </Container>
    </Layout>
  );
}

export default TeamListing;
