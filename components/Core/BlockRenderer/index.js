import React from 'react';
import convert from 'htmr';
import Paragraph from "./Blocks/Typography/Paragraph";
import Image from "./Blocks/Media/Image";
import List from "./Blocks/Typography/List";
import HeadingBlock from "./Blocks/Typography/HeadingBlock";
import Blockquote from "./Blocks/Typography/Blockquote";
import Gallery from './Blocks/Media/Gallery';
import Columns from './Blocks/Layout/Columns';
import Carousel from './Blocks/Media/Carousel';
import {Container} from "reactstrap";
import ArticleList from "./Blocks/Content/ItemsList";
import PDFViewer from "./Blocks/Media/PDFViewer";

const blockMap = {
  'core/paragraph': {
    component: ({ block }) => (
      <Paragraph block={block} />
    )
  },
  'core/gallery': {
    component: ({ block }) => (
      <Gallery
        name={block.name}
        block={block}
      />
    )
  },
  // 'core-embed/youtube': {
  //   component: ({ block }) => (
  //     <YoutubeEmbed
  //       attrs={block.attributes}
  //     />
  //   )
  // },
  'core/quote': {
    component: ({ block }) => (
      <Blockquote
        name={block.name}
        originalContent={block.originalContent}
        block={block}
      />
    )
  },
  'core/image': {
    component: ({ block }) => (
      <Image
        block={block}
      />
    )
  },
  // 'core/html': {
  //   component: ({ block }) => (
  //     <CoreHTMLBlock
  //       name={block.name}
  //       originalContent={block.originalContent}
  //     />
  //   )
  // },
  // 'core-embed/wordpress': {
  //   component: ({ block }) => (
  //     <WordpressEmbed
  //       attrs={block.attributes}
  //     />
  //   )
  // },
  'core/heading': {
    component: ({ block }) => (
      <HeadingBlock
        attributes={block.attributes}
        {...block}
      />
    )
  },
  // 'core/button': {
  //   component: ({ block }) => (
  //     <ArticleButton
  //       {...block}
  //     />
  //   )
  // },
  // 'core/table': {
  //   component: ({ block }) => convert(block.saveContent),
  // },
  // 'core/list': {
  //   component: ({ block, ...rest }) => {
  //     return (
  //       <List block={block}>
  //         {convert(block.attributes.values)}
  //       </List>
  //     )
  //   },
  // },
  // 'core/audio': {
  //   component: ({ block }) => (
  //     <SmallAudioPlayer {...block} />
  //   ),
  // },
  // 'core/group': {
  //   component: ({ block }) => (
  //     <Group {...block} />
  //   ),
  // },
  // 'core/video': {
  //   component: ({ block }) => (
  //     <VideoBlock {...block} />
  //   )
  // },
  // 'core/media-text': {
  //   component: ({ ...block }) => (
  //     <MediaBlock {...block} />
  //   )
  // },
  'core/columns': {
    component: ({ ...block }) => (
      <Columns {...block} />
    ),
  },
  'frilensar/carousel': {
    component: ({ block }) => (
      <Carousel block={block} />
    ),
    config: {
      noConstraint: true,
    },
  },
  'frilensar/block-article-listing': {
    component: ({ block }) => (
      <ArticleList block={block}/>
    ),
  },
  'frilensar/block-custom-post-type-listing': {
    component: ({ block }) => (
      <ArticleList block={block}/>
    ),
  },
  'pdfemb/pdf-embedder-viewer': {
    component: ({ block }) => (
      <PDFViewer block={block} />
    )
  },
  '_default': {
    component: ({ block }) => convert(block.saveContent),
  }
}

const BlockWrapper = ({ children }) => (
  <Container>
    {children}
  </Container>
)
function BlockRenderer({block, overwrites = {}}) {
  const _blockMap = {
    ...blockMap,
    ...overwrites,
  };

  let Component = _blockMap._default.component;
  let componentConfig = null;

  if (_blockMap.hasOwnProperty(block.name)) {
    Component = _blockMap[block.name].component;
    componentConfig = _blockMap[block.name].config;
  }

  if (componentConfig && componentConfig.noConstraint) {
    return (
      <Component block={block} />
    )
  } else {
    return (
      <BlockWrapper>
        <Component block={block}/>
      </BlockWrapper>
    );
  }

}

export default BlockRenderer;
