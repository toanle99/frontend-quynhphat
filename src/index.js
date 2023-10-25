import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/styles/root.css"
import "./assets/styles/layouts/header.css";
import "./assets/styles/layouts/footer.css";
import "./assets/styles/pages/homepage.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
