import React, { Component } from "react";
import Header from "./Components/Header";
import styled from "styled-components";

const PageStyling = styled.div`
  * {
    text-align: center;
  }
`;

export class SignUp extends Component {
  render() {
    return (
      <PageStyling>
        <Header />
        <form>
          <label htmlFor="emailInput">
            Email Address: <br />
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email here..."
          />
          <br />
          <label htmlFor="usernameInput">
            Username: <br />
          </label>
          <input
            type="text"
            id="usernameInput"
            placeholder="Enter your username here..."
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
      </PageStyling>
    );
  }
}

export default SignUp;
