import React, { useState } from 'react';
import {
    Container,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter
} from 'reactstrap';
import styled from 'styled-components';


const CoverPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-color: white;
`;

const StyledCard = styled(Card)`
border-radius: 0;
    &.card{
        border-radius: 0;
    }
`;

const StyledCardBody = styled(CardBody)`
background-color: #00c6b9;
height: 150px;
border-radius: 0;
`;
const StyledCardImg = styled(CardImg)`
width: 420px;
height: 236px;
    &.card-img-top{
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`;

const ArticleItem = (data) => {
    return (

        <div>
            <StyledCard>
                <StyledCardImg top width="100%%" src={data.props.image} alt="Card image cap" />
                <StyledCardBody>
                    <CardTitle>{data.props.title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{data.props.excerpt}</CardText>
                </StyledCardBody>
                <CardFooter>Published by {data.props.author} at {data.props.date}</CardFooter>
            </StyledCard>
        </div>

        // <Card>
        //     <CoverPhoto src={data.props.image} />
        //     <Row>
        //         <h2>
        //             {data.props.title}
        //         </h2>
        //     </Row>
        //     <Row>
        //         {data.props.excerpt}
        //     </Row>
        // </Card>

    )
}

export default ArticleItem;