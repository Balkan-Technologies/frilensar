const frilensarTheme = {
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

const frilensarThemeAlt = {
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



export const getActiveTheme = () => {
  return frilensarTheme;
}
