import PUBLICATII_QUERY from "../../../../../../queries/PUBLICATII_QUERY";
import ECHIPA_QUERY from "../../../../../../queries/ECHIPA_QUERY";
import POSTS_QUERY from "../../../../../../queries/POSTS_QUERY";
import DetailedThumbnail from "./Items/DetailedThumbnail";
import TeamMemberThumbnail from "./Items/TeamMemberThumbnail";

const postTypesToQuery = {
  'publicatie': {
    query: PUBLICATII_QUERY,
    dataKeyName: 'publicatii',
    parentPath: 'publicatii',
    Component: DetailedThumbnail,
  },
  'teammembers': {
    query: ECHIPA_QUERY,
    dataKeyName: 'teamMembers',
    parentPath: 'despre/echipa',
    Component: TeamMemberThumbnail,
  },
  '_default': {
    query: POSTS_QUERY,
    dataKeyName: 'posts',
    parentPath:'blog',
    Component: DetailedThumbnail,
  }
};

const getConfigByPostType = postType => {
  if(postType && postTypesToQuery.hasOwnProperty(postType)) {
    return {
      ...postTypesToQuery[postType],
    }
  } else {
    return {
      ...postTypesToQuery._default,
    }
  }
}

export default getConfigByPostType;
