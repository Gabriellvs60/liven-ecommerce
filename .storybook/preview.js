import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";
import { messagesInEnglish } from "../src/languages/en";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../src/design/GlobalStyles";
import { IntlProvider } from "react-intl";
import { styledTheme } from "../src/design/styledTheme";

addDecorator((story) => (
  <EmotionThemeProvider theme={styledTheme}>
    <GlobalStyles />
    <IntlProvider messages={messagesInEnglish} defaultLocale="en" locale="en">
      <Router>{story()}</Router>
    </IntlProvider>
  </EmotionThemeProvider>
));

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = "";
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const req = require.context("../src/components/", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
