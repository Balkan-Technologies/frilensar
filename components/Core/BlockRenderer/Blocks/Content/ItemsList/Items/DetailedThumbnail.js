import React  from 'react';
import styled, {keyframes, withTheme} from 'styled-components';
import convert from 'htmr';
import Link from 'next/link';
import moment from "moment";

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
  position: relative;
  
  &:after {
    content: ' ';
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, ${({ theme }) => theme.colors.primary} 100%);
    height: 40px;
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

const Author = styled.div`
  color: white;
  font-size: 0.8em;
  position: absolute;
  bottom: 15px;
`;

const Date = styled.div`
  position: absolute;
  right: 30px;
  bottom: 15px;
  color: white;
  font-size: 0.8em;
  font-weight: 200;
`;

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const Card = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  animation: ${cardAnimation} 0.2s ease;
  transition: 0.2s ease transform, 0.2s ease box-shadow, 0.2s ease opacity;
  box-shadow: 0 0 0 white;
  a { 
    text-decoration: none !important;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
  }
`;
const Item = ({ theme, data, parentPath }) => {
  return (
    <Card>
      <Link href={'/[page]/[subpage]'} as={`/${parentPath}/${data.slug}`}>
        <a>
          <CardImg>
            {data.featuredImage ?
              <CoverPhoto src={data.featuredImage.node.sourceUrl} />
              : <CoverPhoto src={`/various/${theme.assets.placeholder}`} />
            }
          </CardImg>
          <CardBody>
            <CardTitle>{data.title}</CardTitle>
            {(data.title.length < 40) && (
              <CardText>{data.excerpt && convert(data.excerpt)}</CardText>
            )}
            <Author>
              {data.author && data.author.node.name !== 'admin' && `de ${data.author.node.name}`}
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

export default withTheme(Item);
