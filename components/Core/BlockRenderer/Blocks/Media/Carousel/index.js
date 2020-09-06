import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled, {withTheme} from 'styled-components';
import gql from 'graphql-tag';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Slide from "./Slide";
import {breakpoint} from "styled-components-breakpoint";
import {CircleLoader} from "react-spinners";
import {Fade} from "react-awesome-reveal";

export const CAROUSEL_QUERY = gql`
  query HomepageSlider {
    slides(where: { orderby: { field: MENU_ORDER, order: DESC }})  {
      edges {
        node {
          __typename
          id
          articlesCustomFields {
            carouselSlideItemType
            carouselSlideItemLinkedPost {
                ... on Post {
                    id
                    title
                    slug
                    uri
                }
            }
            carouselSlideItemAttachment {
              id
              sourceUrl
              srcSet
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

const CarouselWrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;
const CarouselItemContent = styled.div`
  background-size: cover;
  min-height: 30vh;
  max-height: 30vh;
  ${breakpoint('desktop')`
    min-height: 600px;
    max-height: 60vh;
    height: 40vw;
  `}
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  max-height: 30vh;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpoint('desktop')`
    min-height: 600px;
    max-height: 60vh;
    height: 40vw;
  `}
`

function CarouselComponent({ theme }) {
  const { data, loading } = useQuery(CAROUSEL_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.slides.edges.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.slides.edges.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  if(!data || loading){
    return (
      <CarouselWrapper>
        <LoadingPlaceholder>
          <CircleLoader color={theme.colors.primary}/>
        </LoadingPlaceholder>
      </CarouselWrapper>
    );
  }

  return (
    <Fade>
      <CarouselWrapper>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={5000}
        >
          {data.slides.edges.map(edge => {
            return (
              <CarouselItem
                key={edge.node.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
              >
                <CarouselItemContent>
                  <Slide type={edge.node.articlesCustomFields.carouselSlideItemType} {...edge.node} />
                </CarouselItemContent>
              </CarouselItem>

            );
          })}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </CarouselWrapper>
    </Fade>
  );
}

export default withTheme(CarouselComponent);
