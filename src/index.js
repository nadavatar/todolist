import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/home" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
