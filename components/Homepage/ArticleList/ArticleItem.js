import React  from 'react';
import styled, {withTheme} from 'styled-components';
import convert from 'htmr';
import Link from 'next/link';
import moment from "moment";
import {Card} from "../../Core/ColumnsThumbnailList";

const CardImg = styled.div`
`;

const CoverPhoto = styled.img`
  max-height: 170px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const CardBody = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    max-height: 180px;
    padding: 25px 30px;
    height: 180px;
    position: relative;
`;

const CardTitle = styled.div`
margin-bottom: 0.5em;
color: white;
font-weight: normal;
`;

const CardText = styled.div`
color: white;
overflow: hidden;
max-height: 5em;
font-weight: lighter;
font-size: 0.8em;
`;

const Author = styled.div`
  color: white;
  font-size: 0.8em;
  position: absolute;
  bottom: 25px;
`;

const Date = styled.div`
  position: absolute;
  right: 30px;
  bottom: 25px;
  color: white;
  font-size: 0.8em;
  font-weight: 200;
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
                        <Author>
                            de {data.author.node.name}
                        </Author>
                        <Date>
                            {moment(data.date).format('DD.MM.YYYY')}
                        </Date>
                    </CardBody>
                </a>
            </Link>
        </Card>
    )
}

export default withTheme(ArticleItem);
