export const frilensarTheme = {
  colors: {
    primary: '#00c6b9',
    secondary: '#3e3d5b',
    dark: '#2c2c2c',
    danger: '#e93f33',
    warning: '#f8cd89',
    light: '#ffffff',
  },
  assets: {
    mainLogo: 'logo_frilensar-turqouise.png',
    favicon: 'logo_frilensar-turqouise.png',
    secondaryLogo: 'logo_frilensar-white.png',
    placeholder: 'placeholder_main.png',
  },
  socialMediaLinks: {
    fb: 'https://www.facebook.com/Frilensar',
    ig: 'https://www.instagram.com/frilensar/?hl=ro',
    yt: 'https://www.youtube.com/channel/UCaSAWblkqo6sL0VdlivJ1Mg',
  },
  seo: {
    title: 'Frilensar',
    defaultCardImage: 'https://admin.frilensar.ro/drama/wp-content/uploads/sites/2/2020/09/drama-pentru-toti-scaled.jpg',
  },
};

export const dramaFrilensarTheme = {
  colors: {
    primary: '#044769',
    primary_rgba: 'rgba(4, 71, 105, 0)',
    secondary: '#11b0a4',
    dark: '#2c2c2c',
    danger: '#e93f33',
    warning: '#f8cd89',
    light: '#ffffff',
  },
  assets: {
    mainLogo: 'logo_frilensar_drama.svg',
    favicon: 'logo_frilensar_drama.svg',
    secondaryLogo: 'logo_frilensar_drama_white.svg',
    placeholder: 'placeholder_main.png',
  },
  socialMediaLinks: {
    fb: 'https://www.facebook.com/dramapentrutoti',
    ig: 'https://www.instagram.com/dramapentrutoti/?hl=ro',
    yt: 'https://www.youtube.com/channel/UCaSAWblkqo6sL0VdlivJ1Mg',
  },
  seo: {
    title: 'Drama pentru toți',
    defaultCardImage: 'https://admin.frilensar.ro/drama/wp-content/uploads/sites/2/2020/09/drama-pentru-toti-scaled.jpg',
  },
}

export const cevaFrilensarTheme = {
  colors: {
    primary: '#96c93d',
    secondary: '#1498d5',
    dark: '#050606',
    danger: '#e93f33',
    warning: '#dfc223',
    light: '#ffffff',
  },
  assets: {
    mainLogo: 'logo_frilensar_ceva.svg',
    favicon: 'logo_frilensar_ceva.svg',
    secondaryLogo: 'logo_frilensar_ceva_white.svg',
    placeholder: 'placeholder_main.png',
  },
  socialMediaLinks: {
    fb: 'https://www.facebook.com/CEVA.comunitate.educatie.viitor.arta',
    ig: 'https://www.instagram.com/ceva.centru/?hl=ro',
    yt: 'https://www.youtube.com/channel/UCaSAWblkqo6sL0VdlivJ1Mg',
  },
  seo: {
    title: 'Ceva',
    defaultCardImage: 'https://admin.frilensar.ro/drama/wp-content/uploads/sites/2/2020/09/drama-pentru-toti-scaled.jpg',
  },
}

const getTheme = domain => {
  if(domain.indexOf('ceva.frilensar.') !== -1) {
    return cevaFrilensarTheme;
  } else if(domain.indexOf('drama.frilensar') !== -1) {
    return dramaFrilensarTheme;
  } else {
    return frilensarTheme;
  }
}

export default getTheme;
