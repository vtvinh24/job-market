import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/Page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
