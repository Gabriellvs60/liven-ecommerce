import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { GlobalStyles } from "./GlobalStyles";
import { styledTheme } from "./styledTheme";
import { theme } from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider theme={styledTheme}>
      {children}
      <CssBaseline />
      <GlobalStyles />
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;
