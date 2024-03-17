import React from "react";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Auction from "./pages/Auction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/auction",
    element: <Auction />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
