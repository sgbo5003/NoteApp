import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import bacsdf from "../src/images/couple.jpg";
ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
