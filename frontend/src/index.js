import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl)
  throw new Error("Élément #root introuvable dans public/index.html");

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
