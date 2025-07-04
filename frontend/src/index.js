import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const container = document.getElementById("root");
const root = createRoot(container);
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="206537006043-j9e418oiglp9e24hleaap27m8m2olecm.apps.googleusercontent.com">
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
