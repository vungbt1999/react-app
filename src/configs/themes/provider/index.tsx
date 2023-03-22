import React, { createContext, useCallback, useState } from 'react';
import { UIConfig } from '..';

export const getStyle = (uiConfig: UIConfig) => {
  let configStyle: any = {
    // --- COLOR ---
    // Primary Color
    '--color-primary': uiConfig.colors.primary.default,
    '--color-primary-50': uiConfig.colors.primary._50,
    '--color-primary-100': uiConfig.colors.primary._100,
    '--color-primary-200': uiConfig.colors.primary._200,
    '--color-primary-300': uiConfig.colors.primary._300,
    '--color-primary-400': uiConfig.colors.primary._400,
    '--color-primary-500': uiConfig.colors.primary._500,
    '--color-primary-600': uiConfig.colors.primary._600,
    '--color-primary-700': uiConfig.colors.primary._700,
    '--color-primary-900': uiConfig.colors.primary._900,

    // Gray Color
    '--color-gray': uiConfig.colors.gray?.default,
    '--color-gray-50': uiConfig.colors.gray?._50,
    '--color-gray-100': uiConfig.colors.gray?._100,
    '--color-gray-200': uiConfig.colors.gray?._200,
    '--color-gray-300': uiConfig.colors.gray?._300,
    '--color-gray-400': uiConfig.colors.gray?._400,
    '--color-gray-500': uiConfig.colors.gray?._500,
    '--color-gray-600': uiConfig.colors.gray?._600,
    '--color-gray-700': uiConfig.colors.gray?._700,
    '--color-gray-900': uiConfig.colors.gray?._900,

    // Grey Color
    '--color-grey': uiConfig.colors.grey?.default,

    '--color-blue': uiConfig.colors.blue?.default,
    '--color-indigo': uiConfig.colors.indigo?.default,
    '--color-purple': uiConfig.colors.purple?.default,
    '--color-pink': uiConfig.colors.pink?.default,
    '--color-red': uiConfig.colors.red?.default,
    '--color-orange': uiConfig.colors.orange?.default,
    '--color-yellow': uiConfig.colors.yellow?.default,
    '--color-green': uiConfig.colors.green?.default,
    '--color-cyan': uiConfig.colors.cyan?.default,
    '--color-teal': uiConfig.colors.teal?.default,
    '--color-secondary': uiConfig.colors.secondary?.default,
    '--color-success': uiConfig.colors.success?.default,
    '--color-info': uiConfig.colors.info?.default,
    '--color-warning': uiConfig.colors.warning?.default,
    '--color-danger': uiConfig.colors.danger?.default,
    '--color-light': uiConfig.colors.light?.default,
    '--color-dark': uiConfig.colors.dark?.default,
    '--color-facebook': uiConfig.colors.facebook?.default,
    '--color-twitter': uiConfig.colors.twitter?.default,
    '--color-linkedin': uiConfig.colors.linkedin?.default,

    // --- FONT ---
    '--font-primary': uiConfig.font.primary
  };

  if (uiConfig.font.secondary) {
    configStyle = {
      ...configStyle,
      '--font-secondary': uiConfig.font.secondary
    };
  }
  if (uiConfig.font.tertiary) {
    configStyle = {
      ...configStyle,
      '--font-tertiary': uiConfig.font.tertiary
    };
  }

  return configStyle;
};

export type UIContextType = {
  theme: UIConfig;
  setTheme: (_theme: Partial<UIConfig>) => void;
};

const initState = {
  theme: {
    colors: {
      primary: {
        default: ''
      }
    },
    font: {
      primary: 'sans-serif, serif, monospace, cursive'
    }
  },
  setTheme: (_theme: Partial<UIConfig>) => {}
};
const UIContext = createContext<UIContextType>(initState);

export type ThemeProviderProps = {
  config: UIConfig;
  children: JSX.Element | React.ReactNode;
};

export function UIProvider(props: ThemeProviderProps) {
  const [theme, setThemeState] = useState<UIConfig>(props.config);

  const setTheme = useCallback((newTheme: Partial<UIConfig>) => {
    setThemeState((theme) => ({ ...theme, ...newTheme }));
  }, []);

  return (
    <UIContext.Provider value={{ theme, setTheme }}>
      <main style={getStyle(theme)}>
        {theme?.stylesheets?.map((stylesheet, index) => (
          <link key={index} rel="stylesheet" href={stylesheet} />
        ))}
        {props.children}
      </main>
    </UIContext.Provider>
  );
}

export const useUI = () => React.useContext(UIContext);
