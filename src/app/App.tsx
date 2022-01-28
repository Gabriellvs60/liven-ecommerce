import { IntlProvider } from "react-intl";
import { styledTheme } from "../design/styledTheme";
import { messagesInEnglish } from "../languages/en";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useRoutes } from "react-router-dom";
import ProductsPage from "../pages/products/productsPage";
import ProductsCartPage from "../pages/products/productsCardPage";
import { GlobalStyles } from "../design/GlobalStyles";
import { CartProvider } from '../store/cart';
import { ToastContainer } from 'react-toastify'

function App() {
  const element = useRoutes([
    { path: "/", element: <ProductsPage /> },
    {
      path: "productsCart",
      element: <ProductsCartPage />,
    },
  ]);

  return (
    <IntlProvider messages={messagesInEnglish} defaultLocale="en" locale="en">
      <EmotionThemeProvider theme={styledTheme}>
        <GlobalStyles />
        <CartProvider>
        <ToastContainer
          position='top-left'
          autoClose={1500}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {element}
        </CartProvider>
      </EmotionThemeProvider>
    </IntlProvider>
  );
}

export default App;
