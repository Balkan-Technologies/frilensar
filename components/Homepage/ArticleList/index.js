import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ArticleItem from './ArticleItem';
import buildWpPostsStructure from '../../Helpers/buildWpPostsStructure';
import styled from 'styled-components';

const POSTS_QUERY = gql`
query{
    posts{
      nodes{
        id
        slug
        title
        link
        date
        author{
            node{
                name
            }
        }
        excerpt(format: RENDERED)
        featuredImage{
          node{
            id
            sourceUrl
          }
        }
      }
    }
  }
`;

const CardList = styled.ul`
list-style-type: none;
display: flex;
flex-basis: 33.33333%;
justify-content: center;
margin: 100px 100px 100px 100px;
`

const ArticleList = (props) => {
    const { loading, data } = useQuery(POSTS_QUERY)
    if (!data) {
        return null;
    }

    return (
        <CardList>
            {buildWpPostsStructure(data.posts.nodes).map(post => {
                return (
                    <li key={post.id} >
                        <ArticleItem props={post} />
                    </li>
                )
            })
            }
        </CardList>
    )
}

export default ArticleList;