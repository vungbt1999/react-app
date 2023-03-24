import React, { createContext, useCallback, useState } from 'react';
import { UIConfig } from '..';

export const getStyle = (uiConfig: UIConfig) => {
  let configStyle: any = {
    // --- COLOR ---
    // Primary Color
    '--color-primary': uiConfig.colors.primary.default,
    '--color-primary-300': uiConfig.colors.primary._300,
    '--color-primary-400': uiConfig.colors.primary._400,
    '--color-primary-500': uiConfig.colors.primary._500,

    // Secondary Color
    '--color-secondary': uiConfig.colors.secondary?.default,
    '--color-secondary-300': uiConfig.colors.secondary?._300,

    // Light Color
    '--color-light': uiConfig.colors.light?.default,
    '--color-light-300': uiConfig.colors.light?._300,

    // Dark Color
    '--color-dark': uiConfig.colors.dark?.default,
    '--color-dark-500': uiConfig.colors.dark?._500,
    '--color-dark-600': uiConfig.colors.dark?._600,

    // Gray Color
    '--color-gray': uiConfig.colors.gray?.default,
    '--color-gray-400': uiConfig.colors.gray?._400,

    // --- FONT ---
    '--font-primary': uiConfig.font.primary,
    '--font-secondary': uiConfig.font.secondary
  };
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
