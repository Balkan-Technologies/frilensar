import React from 'react';
import { Container } from 'reactstrap';
import Header from './Header/index';
import Footer from "./Footer";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import styled from 'styled-components';

export const NAVIGATION_QUERY = gql`
    query Navigation($id: ID!, $idType: MenuNodeIdTypeEnum){
        menu(id: $id, idType: $idType){
            __typename
            id
            name
            menuItems{
                edges {
                    node {
                        __typename
                        id
                        parentId
                        path
                        label
                        menusCustomFields {
                            menuItemIsStaticRoute
                        }
                        childItems {
                            edges {
                                node {
                                    __typename
                                    id
                                    url
                                    label
                                    menusCustomFields {
                                        menuItemIsStaticRoute
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const ContentWrapper = styled.section`
  min-height: 80vh;
`;

function Layout({ children }) {
  const { loading, data: menuItems } = useQuery(
    NAVIGATION_QUERY, {
    variables: {
      id: 2,
      idType: "DATABASE_ID"
    }
  });

  return (
    <Container fluid>
      <Header menuItems={menuItems} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer menuItems={menuItems} />
    </Container>
  );
}

export default Layout;
