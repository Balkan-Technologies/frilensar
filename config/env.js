const LOCAL_FRILENSAR = {
  API_URL: process.env.NEXT_PUBLIC_API_URL
}

const MAIN_FRILENSAR = {
  API_URL: 'https://admin.frilensar.ro/graphql',
}
const CEVA_FRILENSAR = {
  API_URL: 'https://admin.frilensar.ro/ceva/graphql',
}

const DRAMA_FRILENSAR = {
  API_URL: 'https://admin.frilensar.ro/drama/graphql',
}

const getConfigForDomain = (domain) => {
  if(domain.indexOf('ceva.frilensar.') !== -1) {
    return CEVA_FRILENSAR;
  } else if(domain.indexOf('drama.frilensar') !== -1) {
    return DRAMA_FRILENSAR;
  } else {
    return MAIN_FRILENSAR;
  }
}

export default (domain) => {
  if(domain) {
    return getConfigForDomain(domain);
  }

  if(!domain && typeof window !== "undefined") {
    const domain = location.hostname;
    return getConfigForDomain(domain);
  }
};
