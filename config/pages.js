import GenericPage from '../components/Core/GenericPage';
import PAGE_QUERY from "../queries/PAGE_QUERY";
import BLOG_QUERY from "../queries/BLOG_QUERY";
import Blog from "../components/Layout/Blog/BlogPost";

const pagesConfig = {
  "blog/*": {
    component: Blog,
    query: BLOG_QUERY,
    dataKeyName: 'posts',
  },
  "_default": {
    component: GenericPage,
    query: PAGE_QUERY,
    dataKeyName: 'pages',
  }
}

function getConfigForPage(pageName, subpageName) {
  const pagePath = `${pageName}${subpageName ? '/*' : ''}`;

  if(pagesConfig.hasOwnProperty(pagePath)) {
    return {
      Component: pagesConfig[pagePath].component,
      query: pagesConfig[pagePath].query,
      dataKeyName: pagesConfig[pagePath].dataKeyName,
    }
  }

  return {
    Component: pagesConfig._default.component,
    query: pagesConfig._default.query,
    dataKeyName: pagesConfig._default.dataKeyName,
  }
}

export default getConfigForPage;
