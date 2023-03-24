import { UIConfig } from './types';

export const themeConfig: UIConfig = {
  colors: {
    primary: {
      default: '#FFCC21',
      _300: '#FFCC21',
      _400: '#FF963C',
      _500: '#EA6C00'
    },
    secondary: {
      default: '#8FE9D0',
      _300: '#8FE9D0'
    },
    light: {
      default: '#FFFFFF',
      _300: '#FFFFFF'
    },
    dark: {
      default: '#414141',
      _500: '#414141',
      _600: '#2E2E2E'
    },
    gray: {
      default: '#777777',
      _400: '#777777'
    }
  },
  font: {
    primary: "'Noto Sans JP', sans-serif",
    secondary: "'Inter', sans-serif"
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap'
  ]
};
