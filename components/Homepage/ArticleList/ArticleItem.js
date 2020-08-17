import React  from 'react';
import styled, {withTheme} from 'styled-components';
import convert from 'htmr';
import Link from 'next/link';

const Card = styled.div`
margin-bottom: 30px;
cursor: pointer;

a { 
  text-decoration: none !important;
}
`;

const CardImg = styled.div`
`;

const CoverPhoto = styled.img`
max-height: 200px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const CardBody = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
max-height: 150px;
padding: 25px 30px;
height: 150px;
`;

const CardTitle = styled.div`
margin-bottom: 20px;
color: white;
font-weight: bold;
`;

const CardText = styled.div`
color: white;
overflow: hidden;
max-height: 4em;
`;


const ArticleItem = ({ theme, data }) => {
    return (
        <Card>
            <Link href={'/blog/[slug]'} as={`/blog/${data.slug}`}>
                <a>
                    <CardImg>
                        {data.featuredImage ?
                          <CoverPhoto src={data.featuredImage.node.sourceUrl} />
                          : <CoverPhoto src={`/various/${theme.assets.placeholder}`} />
                        }
                    </CardImg>
                    <CardBody>
                        <CardTitle>{data.title}</CardTitle>
                        <CardText>{convert(data.excerpt)}</CardText>
                    </CardBody>
                </a>
            </Link>
        </Card>
    )
}

export default withTheme(ArticleItem);
