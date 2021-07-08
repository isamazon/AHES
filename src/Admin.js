import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FaArrowDown } from "react-icons/fa";
// Components
import Textbox from "./components/admin/textbox";
import Nav from "./components/nav";
import Photos from "./components/admin/photos";

function Admin() {
  const [textBoxValue, setTextBoxValue] = useState("");
  const currentTextValue = useRef(null);

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
      .put("http://hot-potatoes.herokuapp.com/api/description", object)
      .then(fetchInitialText());
  };

  useEffect(() => {
    fetchInitialText();
  }, []);
  return (
    <div>
      <Nav />
      <Container fluid className="admin-container">
        <Row className="row-1">
          <Col xl={12} className="textbox-col">
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
            <h1>What customers will see</h1>
            <Textbox textbox={textBoxValue} />
          </Col>
          {/* Drop zone */}
          <Col>
            <Photos />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;
