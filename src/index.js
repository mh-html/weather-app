import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherDataContext from "./context/WeatherDataContext ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherDataContext>
      <App />
    </WeatherDataContext>
  </React.StrictMode>
);
