import { Typography } from "@mui/material";
import { IntlProvider } from "react-intl";
import { styledTheme } from "../design/styledTheme";
import { messagesInEnglish } from "../languages/en";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

function App() {
  return (
    <IntlProvider messages={messagesInEnglish} defaultLocale="en" locale="en">
      <EmotionThemeProvider theme={styledTheme}>
        <Typography variant="h1">Welcome</Typography>
      </EmotionThemeProvider>
    </IntlProvider>
  );
}

export default App;
