import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Layout from "../layout";
import Products from "../pages/products";

import ProductDetail from "../pages/detail";
import Payment from "../pages/payment";
import Card from "../pages/card";
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Profile from "../pages/profile";
// Define the router with paths and components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />
      },
      {
        path: "/payment/:productId",
        element: <Payment />
      },
      {
        path: "/card",
        element: <Card />
      },
      {
        path: "/profile",
        element: <Profile />
      },

    ]
  }, {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },

]);