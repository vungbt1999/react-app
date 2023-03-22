export type UIConfig = {
  colors: ColorPalette;
  font: {
    primary: string;
    secondary?: string;
  };
  stylesheets?: string[];
};

export type ColorPalette = {
  primary: ColorPaletteConfig;
  secondary?: ColorPaletteConfig;
  light?: ColorPaletteConfig;
  dark?: ColorPaletteConfig;
  gray?: ColorPaletteConfig;
};

export type ColorPaletteConfig = {
  default: string;
  _300?: string;
  _400?: string;
  _500?: string;
  _600?: string;
};
