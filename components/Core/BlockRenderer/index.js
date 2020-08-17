import React from 'react';
import convert from 'htmr';
import Paragraph from "./Blocks/Paragraph";
import Image from "./Blocks/Image";
import List from "./Blocks/List";
import HeadingBlock from "./Blocks/HeadingBlock";
import Blockquote from "./Blocks/Blockquote";
import Gallery from './Blocks/Gallery';
import Columns from './Blocks/Columns';
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
  '_default': {
    component: ({ block }) => convert(block.saveContent),
  }
}

function BlockRenderer({block, overwrites = {}}) {
  const _blockMap = {
    ...blockMap,
    ...overwrites,
  };
  if (_blockMap.hasOwnProperty(block.name)) {
    const Component = _blockMap[block.name].component;
    return <Component block={block}/>
  } else {
    const Component = _blockMap._default.component;
    return <Component block={block}/>
  }
}

export default BlockRenderer;
