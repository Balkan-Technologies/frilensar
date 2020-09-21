import React from 'react';
import BlockRenderer from "../../Core/BlockRenderer";
import { Container } from "reactstrap";
import moment from "moment";
import Head from "next/head";
import styled, { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
`

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
          <meta property="og:image" content={featuredImage.node.sourceUrl} />
      </Head>
      <ContentWrapper>
        <Container>
          <h1>{title}</h1>
          <p>de {name} | {moment(date).format('DD.MM.YYYY')}</p>

          <SocialButton onClick={() => openPopUp(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)} icon={faFacebook} />
          <SocialButton onClick={() => openPopUp(`https://twitter.com/intent/tweet?url=${window.location.href}`)} icon={faTwitter} />
        </Container>
        {blocks.map(block => (
          <BlockRenderer block={block} key={`${block.name}-${block.postId}-${block.order}`} />
        ))}
      </ContentWrapper>
    </section>
  )
}

export default withTheme(BlogPost);
