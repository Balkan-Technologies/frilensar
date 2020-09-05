import GenericPage from '../components/Layout/GenericPage';
import PAGE_QUERY from "../queries/PAGE_QUERY";
import BLOG_QUERY from "../queries/BLOG_QUERY";
import Blog from "../components/Layout/Blog/BlogPost";
import PUBLICATIE_QUERY from "../queries/PUBLICATIE_QUERY";
import ECHIPA_QUERY from "../queries/ECHIPA_QUERY";

const pagesConfig = {
  "blog/*": {
    component: Blog,
    query: BLOG_QUERY,
    dataKeyName: 'posts',
  },
  "publicatii/*": {
    component: GenericPage,
    query: PUBLICATIE_QUERY,
    dataKeyName: 'publicatii',
  },
  "_default": {
    component: GenericPage,
    query: PAGE_QUERY,
    dataKeyName: 'pages',
  }
}

function getConfigForPage(pageName, subpageName) {
  // Check for static route
  const staticPath = `${pageName}/${subpageName}`;
  if(pagesConfig.hasOwnProperty(staticPath)) {
    return {
      Component: pagesConfig[staticPath].component,
      query: pagesConfig[staticPath].query,
      dataKeyName: pagesConfig[staticPath].dataKeyName,
    }
  }

  // Check for dynamic path
  const dynamicPath = `${pageName}${subpageName ? '/*' : ''}`;
  if(pagesConfig.hasOwnProperty(dynamicPath)) {
    return {
      Component: pagesConfig[dynamicPath].component,
      query: pagesConfig[dynamicPath].query,
      dataKeyName: pagesConfig[dynamicPath].dataKeyName,
    }
  }

  return {
    Component: pagesConfig._default.component,
    query: pagesConfig._default.query,
    dataKeyName: pagesConfig._default.dataKeyName,
  }
}

export default getConfigForPage;
