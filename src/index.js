import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PrivateKeyContextProvider } from "./context/privateKeyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrivateKeyContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrivateKeyContextProvider>
);
