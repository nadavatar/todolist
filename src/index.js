import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Login from "./Login";

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
