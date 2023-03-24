/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/modules/**/*.{jsx,tsx}',
    './src/libraries/**/*.{jsx,tsx}',
    './src/config/**/*.{jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1280px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10rem',
        sm: '5rem',
        md: '5rem',
        lg: '5rem',
        xl: '10rem',
        '2xl': '10rem'
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1280px',
        '2xl': '1280px'
      }
    },
    fontFamily: {
      primary: 'var(--font-primary)',
      secondary: 'var(--font-secondary)'
    },
    colors: {
      // default
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',

      // theme
      primary: {
        DEFAULT: 'var(--color-primary)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)'
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        300: 'var(--color-secondary-300)'
      },
      light: {
        DEFAULT: 'var(--color-light)',
        300: 'var(--color-light-300)'
      },
      dark: {
        DEFAULT: 'var(--color-dark)',
        500: 'var(--color-dark-500)',
        600: 'var(--color-dark-600)'
      },
      gray: {
        DEFAULT: 'var(--color-gray)',
        400: 'var(--color-gray-400)'
      }
    },
    extend: {
      clipPath: {
        hexagon: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)'
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    }
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
  variants: {
    scrollbar: ['rounded']
  }
};
