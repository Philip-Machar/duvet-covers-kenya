// ... existing code ...
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import CartProvider from "./components/feature/CartProvider";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <CartProvider>
          <ScrollToTop />
          <AppRoutes />
        </CartProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;