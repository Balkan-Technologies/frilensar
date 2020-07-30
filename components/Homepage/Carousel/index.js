import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
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

const CAROUSEL_QUERY = gql`
  query {
    slides {
      edges {
        node {
          id
          articlesCustomFields {
            carouselSlideItemType
            carouselSlideItemLinkedPost {
                ... on Post {
                    title
                    slug
                    uri
                }
                ... on Page {
                    title
                    slug
                    uri
                }
            }
            carouselSlideItemAttachment {
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
  max-height: 20vh;
  ${breakpoint('desktop')`
    min-height: 600px;
    max-height: 60vh;
    height: 40vw;
  `}
`;

function CarouselComponent() {
  const { data, loading } = useQuery(CAROUSEL_QUERY);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  if(!data || loading){
    return null;
  }
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

  return (
    <CarouselWrapper>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride={false}
        interval={false}
      >
        {/*<CarouselIndicators items={data.slides.edges} activeIndex={activeIndex} onClickHandler={goToIndex} />*/}
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
  );
}

export default CarouselComponent;
