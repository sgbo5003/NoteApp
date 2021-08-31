import React from "react";
import Router from "./Router";
import "./css/style.css";

const App = () => (
  <div className="main">
    <div className="main_container">
      {/*title container*/}
      <div className="main_title">Note App</div>
      <Router />
    </div>
  </div>
);
export default App;
