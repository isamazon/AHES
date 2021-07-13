import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// CSS
import "../../styles/login.css";
import Logo from "../../assets/logo.png";

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
    const secretUsername = "Admin";
    const secretPassword = "Password";
    const currentUsername = username.current.value;
    const currentPassword = password.current.value;
    if (
      secretUsername === currentUsername &&
      currentPassword === secretPassword
    ) {
      setLoggedInTrue(true);
      history.push("/admin");
    } else {
      setLoggedInTrue(false);
    }
  };

  return (
    <Container fluid className="login-container">
      <div className="login-form-cnt">
        <img src={Logo} className="top-logo" alt="" />
        <form onSubmit={(e) => handleSubmitForm(e)} className="form">
          <input
            ref={username}
            type="text"
            name="username"
            placeholder="username"
            className=""
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" />
        </form>
      </div>
    </Container>
  );
}

export default Login;
