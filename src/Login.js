import React, { Component } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";

const PageStyling = styled.div`
  * {
    text-align: center;
    place-items: center;
  }
`;

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
  }

  handleUsernameInput = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <PageStyling>
        <Header />
        <form>
          <label htmlFor="usernameInput">
            Username: <br />
          </label>
          <input
            type="text"
            id="usernameInput"
            placeholder="Enter your username here..."
            value={this.state.username}
            onChange={this.handleUsernameInput}
          />
          <br />
          <label htmlFor="passwordInput">
            Password: <br />
          </label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Enter your password here..."
          />
          <br />
          <input type="submit" id="submitButton" />
        </form>
        <div>
          <p id="small">Dont have an account yet?</p>
          <NavLink to="/signup" id="redirect">
            Sign Up
          </NavLink>
        </div>
      </PageStyling>
    );
  }
}

export default Login;
