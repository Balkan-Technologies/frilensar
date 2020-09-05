import React  from 'react';
import styled, {withTheme} from 'styled-components';
import Link from 'next/link';
import {Card} from "../../ColumnsThumbnailList";

const CardImg = styled.div`
`;

const CoverPhoto = styled.img`
  max-height: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const CardBody = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    max-height: 180px;
    padding: 15px 30px;
    position: relative;
`;

const CardTitle = styled.div`
margin-bottom: 0.5em;
color: white;
font-weight: normal;
`;

const Item = ({ theme, data, parentPath }) => {
  return (
    <Card>
      <Link href={'/despre/echipa/[teamMemberSlug]'} as={`/${parentPath}/${data.slug}`}>
        <a>
          <CardImg>
            {data.featuredImage ?
              <CoverPhoto src={data.featuredImage.node.sourceUrl} />
              : <CoverPhoto src={`/various/${theme.assets.placeholder}`} />
            }
          </CardImg>
          <CardBody>
            <CardTitle>{data.title}</CardTitle>
          </CardBody>
        </a>
      </Link>
    </Card>
  )
}

export default withTheme(Item);
