// src/main.jsx
// ▼必ず先頭に入れる
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { createRoot } from "react-dom/client";
import "./ress.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
