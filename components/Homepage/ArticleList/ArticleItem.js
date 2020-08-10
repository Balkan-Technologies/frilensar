import React, { useState } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import styled from 'styled-components';
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
background-color: #00c6b9;
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


const ArticleItem = (props) => {
    console.log(props);
    return (
        <Link href={'/blog/[slug]'} as={`/blog/${props.data.slug}`}>
                <Card>
                    <CardImg>
                        {props.data.featuredImage ?
                            <CoverPhoto src={props.data.featuredImage.node.sourceUrl} />
                            : <CoverPhoto src="/placeholder.png" />
                        }
                    </CardImg>
                    <CardBody>
                        <CardTitle>{props.data.title}</CardTitle>
                        <CardText>{convert(props.data.excerpt)}</CardText>
                    </CardBody>
                </Card>
        </Link>
    )
}

export default ArticleItem;