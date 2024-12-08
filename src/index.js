import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Optional: Your styles
import App from "./App"; // Path to your App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
