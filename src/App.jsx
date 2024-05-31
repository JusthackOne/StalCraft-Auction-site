import React from "react";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { ROUTES } from "./utils/routes";


const router = createBrowserRouter([
  {
    path: ROUTES.MAIN.to,
    element: ROUTES.MAIN.component,
  },
  {
    path: ROUTES.AUCTION.to,
    element: ROUTES.AUCTION.component,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
