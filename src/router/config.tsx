import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CollectionsPage from "../pages/collections/page";
import ProductDetailPage from "../pages/products/page";
import AllProductsPage from "../pages/products/list/page";
import OffersPage from "../pages/offers/page";
import CartPage from "../pages/cart/page";
import ContactPage from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collections/:slug",
    element: <CollectionsPage />,
  },
  {
    path: "/collections",
    element: <CollectionsPage />,
  },
  {
    path: "/products",
    element: <AllProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/offers",
    element: <OffersPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;