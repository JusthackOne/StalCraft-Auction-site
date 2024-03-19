import React from "react";
import { createRoot } from "react-dom/client";

import "tailwindcss/tailwind.css";
import App from "./App";

import { store } from "./redux";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
