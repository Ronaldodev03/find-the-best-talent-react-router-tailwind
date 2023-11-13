import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import ErrorPage from "./components/ErrorPage";
import SuccessPage from "./pages/success/SuccessPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { action as contactAction } from "./actions/contact";
import NotFound from "./pages/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: contactAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>,
);
