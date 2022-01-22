import { IntlProvider } from "react-intl";
import { styledTheme } from "../design/styledTheme";
import { messagesInEnglish } from "../languages/en";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useRoutes } from 'react-router-dom';
import ProductsPage from '../components/pages/products/productsPage';
import ProductsCartPage from '../components/pages/products/productsCardPage';
import ProductsOverviewPage from '../components/pages/products/productOverview';

function App() {
  const element = useRoutes([
    { path: '/', element: <ProductsPage /> },
    {
      path: 'productsCart',
      element: <ProductsCartPage />,
    },
    { path: 'productOverview', element: <ProductsOverviewPage /> },
])

  return (
    <IntlProvider messages={messagesInEnglish} defaultLocale="en" locale="en">
      <EmotionThemeProvider theme={styledTheme}>
       {element}
      </EmotionThemeProvider>
    </IntlProvider>
  );
}

export default App;
