import { colors } from "./colors";

import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      dark: colors.sushiGreen.dark,
      main: colors.sushiGreen.main,
      light: colors.sushiGreen.light,
    },
    secondary: {
      dark: colors.blackMineShaft.dark,
      main: colors.blackMineShaft.main,
      light: colors.blackMineShaft.light,
    },
    error: {
      dark: colors.carnation.dark,
      main: colors.carnation.main,
      light: colors.carnation.light,
    },
    warning: {
      dark: colors.pirateGold.dark,
      main: colors.pirateGold.main,
      light: colors.pirateGold.light,
    },
    info: {
      dark: colors.electricViolet.dark,
      main: colors.electricViolet.main,
      light: colors.electricViolet.light,
    },
    success: {
      dark: colors.mountainMeadowGreen.dark,
      main: colors.mountainMeadowGreen.main,
      light: colors.mountainMeadowGreen.light,
    },
    text: {
      primary: colors.blackMineShaft.main,
      secondary: colors.doveGray.main,
    },
    background: {
      default: colors.white.main,
    },
    divider: colors.mercuryWhite.main,
  },
  typography: {
    h1: {
      fontSize: "1.9rem",
      fontFamily: "Roboto Slab",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.4rem",
      fontFamily: "Roboto Slab",
    },
    h3: {
      fontSize: "1.3rem",
      fontFamily: "Roboto Slab",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "1.2rem",
      fontFamily: "Roboto Slab",
    },
    h5: {
      fontSize: "1.1rem",
      fontFamily: "Roboto Slab",
    },
    h6: {
      fontSize: "1rem",
      fontFamily: "Roboto Slab",
    },
    subtitle1: {
      fontSize: "1rem",
      fontFamily: "Roboto Slab",
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontFamily: "Roboto Slab",
    },
    body1: {
      fontSize: "0.9rem",
      fontFamily: "Roboto Slab",
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "Roboto Slab",
    },
    button: {
      fontFamily: "Roboto Slab",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
} as unknown as ThemeOptions);
