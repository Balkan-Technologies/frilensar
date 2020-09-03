import GenericPage from '../components/Core/GenericPage';
import PAGE_QUERY from "../queries/PAGE_QUERY";

const pagesConfig = {
  "_default": {
    component: GenericPage,
    query: PAGE_QUERY,
  }
}

function getConfigForPage(pageName) {
  if(pagesConfig.hasOwnProperty(pageName)) {
    return {
      Component: pagesConfig[pageName].component,
      query: pagesConfig[pageName].query,

    }
  }

  return {
    Component: pagesConfig._default.component,
    query: pagesConfig._default.query,

  }
}

export default getConfigForPage;
