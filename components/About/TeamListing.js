import React from 'react';
import Layout from "../Layout";
import {Container} from "reactstrap";
import ColumnsThumbnailList, {Card} from '../../components/Core/ColumnsThumbnailList';
import styled from 'styled-components';
import Link from "next/link";

const CardPhoto = styled.img`
  width: 100%;
`;
function TeamListing({ data }) {
  return (
    <Layout>
      <Container>
        <ColumnsThumbnailList>
          {data.teamMembers.edges.map(({ node }) => (
            <Card>
              <Link href={'/despre/echipa/[teamMemberSlug]'} as={`/despre/echipa/${node.slug}`}>
                <a>
                  <CardPhoto src={node.featuredImage.node.sourceUrl}/>
                </a>
              </Link>
              {node.title}
            </Card>
          ))}
        </ColumnsThumbnailList>
      </Container>
    </Layout>
  );
}

export default TeamListing;
