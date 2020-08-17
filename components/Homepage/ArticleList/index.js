import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'reactstrap';
import ArticleItem from './ArticleItem';
import styled from 'styled-components';
import { breakpoint } from "styled-components-breakpoint";


const POSTS_QUERY = gql`
query{
    posts{
      nodes{
        __typename
        id
        slug
        title
        link
        date
        author{
            node{
                __typename
                name
            }
        }
        excerpt(format: RENDERED)
        featuredImage{
          node{
            __typename
            id
            sourceUrl
          }
        }
      }
    }
  }
`;

const CardList = styled.ul`
  display: grid;
   ${breakpoint('tablet')`
    grid-template-columns: auto auto;
  `};
  
  ${breakpoint('desktop')`
    grid-template-columns: repeat(3, 1fr);
  `};
  align-items: center;
  grid-column-gap: 30px;
  list-style-type: none;
  padding: 0px;
  padding-top: 30px;
  margin: 0px;
`;


const ArticleList = (props) => {
  const { loading, data } = useQuery(POSTS_QUERY)
  if (!data) {
    return null;
  }

  return (
    <Container>
      <CardList>
        {data.posts.nodes.map(post => {
          return (
            <li key={post.id} >
              <ArticleItem data={post} />
            </li>
          )
        })
        }
      </CardList>
    </Container>
  )
}

export default ArticleList;