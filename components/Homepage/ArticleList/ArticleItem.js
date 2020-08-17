import React, { useState } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import styled, {withTheme} from 'styled-components';
import convert from 'htmr';
import Link from 'next/link';

const Card = styled.div`
margin-bottom: 30px;
cursor: pointer;
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
max-height: 130px;
`;


const ArticleItem = ({ theme, data }) => {
    return (
        <Link href={'/blog/[slug]'} as={`/blog/${data.slug}`}>
                <Card>
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
                </Card>
        </Link>
    )
}

export default withTheme(ArticleItem);
