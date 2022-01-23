import '@emotion/react';


import { colors } from './colors';
import { theme } from './theme';

export const styledTheme = {
  ...theme,
  colors,
};

export type StyledThemeType = typeof styledTheme;

declare module '@emotion/react' {
  export interface Theme extends StyledThemeType { } // eslint-disable-line
}
