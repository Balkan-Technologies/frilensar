import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import { Container } from "reactstrap";
import moment from "moment";
import Head from "next/head";
import styled, {keyframes, withTheme} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { breakpoint } from "styled-components-breakpoint";

const ContentWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const SocialButton = styled(FontAwesomeIcon)`
    color: black;
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
    margin-right: 0.4em;
    cursor: pointer;
`
const featuredPhotoAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FeaturedPhoto = styled.div`
  background: url("${({ src }) => src}") center;
  height: 60vh;
  padding: 2em;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 2em;
  display: none;
  animation: ${featuredPhotoAnimation} 0.2s ease;
  ${breakpoint('tablet')`
    display: flex;
  `};
  ${breakpoint('desktop')`
    display: flex;
  `};
  
`;

const MobileFeaturedPhoto = styled.div`
  background: url("${({ src }) => src}") center;
  background-size: cover;
  height: 60vh;
  display: block;
  animation: ${featuredPhotoAnimation} 0.2s ease;
  
  ${breakpoint('tablet')`
    display: none;
  `};
  ${breakpoint('desktop')`
    display: none;
  `};
  
`;

const PostTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3em;
  font-weight: bolder;
`;

const PostMeta = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.8em;
  ${breakpoint('desktop')`
    padding: 0.5em;
  `};
  margin: 0;
  margin-top: -15px;
  margin-left: 10px;
  font-size: 0.8em;
`;

const SocialButtonsWrapper = styled.div`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3em 0.3em 0.3em 0.7em;
`;

const MobileHeaderWrapper = styled.div`
  display: block;
  ${breakpoint('tablet')`
    display: none;
  `};
  ${breakpoint('desktop')`
    display: none;
  `};
  
  ${PostTitle} {
    margin-bottom: 0;
    font-size: 2em;
  }
  
  ${PostMeta} {
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  ${SocialButtonsWrapper} {
   
  }
`;
function BlogPost({ data, theme }) {
  const { title, date, featuredImage, blocksJSON, author: { node : { name }} } = data;
  const blocks = JSON.parse(blocksJSON);
  const openPopUp = (url) => {
    if (typeof window !== 'undefined') {
      const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=400,left=100,top=100`;
      window.open(url, null, params)
    }
  }
  return (
    <section>
      <Head>
        <title>{theme.seo.title} | { title }</title>
          <meta property="og:title" content={title} />
      </Head>
      <ContentWrapper>
        <Container>
          <FeaturedPhoto src={featuredImage && featuredImage.node.sourceUrl}>
            <PostTitle>{title}</PostTitle>
            <PostMeta>de {name} | {moment(date).format('DD.MM.YYYY')}</PostMeta>
            <SocialButtonsWrapper>
              <SocialButton onClick={() => openPopUp(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)} icon={faFacebook} />
              <SocialButton onClick={() => openPopUp(`https://twitter.com/intent/tweet?url=${window.location.href}`)} icon={faTwitter} />
            </SocialButtonsWrapper>
          </FeaturedPhoto>
          <MobileHeaderWrapper>
            <MobileFeaturedPhoto src={featuredImage && featuredImage.node.sourceUrl} />
            <PostTitle>{title}</PostTitle>
            <PostMeta>
              de {name} | {moment(date).format('DD.MM.YYYY')}
              <SocialButtonsWrapper>
                <SocialButton onClick={() => openPopUp(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)} icon={faFacebook} />
                <SocialButton onClick={() => openPopUp(`https://twitter.com/intent/tweet?url=${window.location.href}`)} icon={faTwitter} />
              </SocialButtonsWrapper>
            </PostMeta>

          </MobileHeaderWrapper>
        </Container>
        {blocks.map(block => (
          <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
        ))}
      </ContentWrapper>
    </section>
  )
}

export default withTheme(BlogPost);
