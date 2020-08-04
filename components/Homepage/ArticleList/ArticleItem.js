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
`
// const Card = styled(Container)`
// background-color: #2c2c2c;
// color: white;
// width: 50%;
// padding: 10px;
// border-color: white;
// `

const ArticleItem = (data) => {
    return (

        <div>
            <Card>
                <CardImg top width="100%" src={data.props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{data.props.title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{data.props.excerpt}</CardText>
                </CardBody>
                <CardFooter>{data.props.author}</CardFooter>
            </Card>
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