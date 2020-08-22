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
    secondaryLogo: 'logo_frilensar-white.png',
    placeholder: 'placeholder_main.png',
  },
};

export const dramaFrilensarTheme = {
  colors: {
    primary: '#2c2c2c',
    secondary: '#f1ce92',
    dark: '#2c2c2c',
    danger: '#e93f33',
    warning: '#f8cd89',
    light: '#ffffff',
  },
  assets: {
    mainLogo: 'logo_frilensar-beige.png',
    secondaryLogo: 'logo_frilensar-white.png',
    placeholder: 'placeholder_main.png',
  },
}

export const cevaFrilensarTheme = {
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
    secondaryLogo: 'logo_frilensar-white.png',
    placeholder: 'placeholder_main.png',
  },
}

export const frilensarThemeAlt = {
  colors: {
    primary: '#3e3d5b',
    secondary: '#00c6b9',
    dark: '#2c2c2c',
    danger: '#e93f33',
    warning: '#f8cd89',
    light: '#ffffff'
  },
  assets: {
    mainLogo: 'logo_frilensar-blue.png',
    secondaryLogo: 'logo_frilensar-white.png',
    placeholder: 'placeholder_alt.png',
  },
};

export default (domain) => {
  if(domain.indexOf('ceva.frilensar.') !== -1) {
    return cevaFrilensarTheme;
  } else if(domain.indexOf('drama.frilensar') !== -1) {
    return dramaFrilensarTheme;
  } else {
    return frilensarTheme;
  }
}
