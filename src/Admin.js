import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FaArrowDown } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";

// Components
import Textbox from "./components/admin/textbox";
import Nav from "./components/nav";
import Photos from "./components/admin/photos";
import Logout from "./components/admin/logout";
function Admin() {
  const [textBoxValue, setTextBoxValue] = useState("");
  const currentTextValue = useRef(null);
  const history = useHistory();

  const fetchInitialText = () => {
    axios
      .get("https://hot-potatoes.herokuapp.com/api/description")
      .then((data) => {
        setTextBoxValue(data.data);
        console.log(data);
      });
  };

  const handleSubmit = (e) => {
    console.log("works");
    e.preventDefault();
    const object = {
      description: currentTextValue.current.value,
    };
    axios
      .put("https://hot-potatoes.herokuapp.com/api/description", object)
      .then(fetchInitialText());
  };

  const checkLoggedIn = () => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === false || loggedIn === null) {
      history.push("/login");
    }
  };

  useEffect(() => {
    fetchInitialText();
    checkLoggedIn();
  }, []);
  return (
    <div>
      <Nav />

      <Container fluid className="admin-container">
        <h1 className="welcome-h1">Welcome frank</h1>
        <Row className="row-1">
          <Col xl={6} md={12} className="textbox-col">
            <h1 className="desc-h1">Enter descripion here</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                ref={currentTextValue}
                type="text"
                className="input-box"
                required
              />
              <input type="submit" value="submit" className="submit-btn" />
            </form>
            <h1 className="return-h1">What customers will see</h1>
            <Textbox textbox={textBoxValue} />
          </Col>
          {/* Drop zone */}
          <Col xl={6} md={12} className="photo-col">
            <Photos />
          </Col>
          <Link className="logout" to="/Logout">
            Logo ut
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
