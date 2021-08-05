import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// CSS
import "../../styles/login.css";
import Logo from "../../assets/logo.png";
import Nav from "../nav";
function Login() {
  const [warningMessage, setWarningMessage] = useState("");
  const username = useRef(null);
  const password = useRef(null);
  const history = useHistory();

  const setLoggedInTrue = (response) => {
    if (response === true) {
      localStorage.setItem("loggedIn", true);
    } else {
      setWarningMessage("Wrong Credentials");
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const secretUsername = "ahesales1";
    const secretPassword = "frank12345";
    const currentUsername = username.current.value;
    const currentPassword = password.current.value;
    if (
      secretUsername === currentUsername &&
      currentPassword === secretPassword
    ) {
      setLoggedInTrue(true);
      history.push("/admin"); // hi
    } else {
      setLoggedInTrue(false);
    }
  };

  return (
    <Container fluid className="login-container">
      <Nav />
      <div className="login-form-cnt">
        <img src={Logo} className="top-logo" alt="" />
        <h1 className="login-h1"></h1>
        <form onSubmit={(e) => handleSubmitForm(e)} className="form">
          <input
            ref={username}
            type="text"
            name="username"
            placeholder="username"
            className="username-input"
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="password"
            className="password-input"
          />
          <input type="submit" value="Login" className="login-button" />
        </form>
      </div>
    </Container>
  );
}

export default Login;
