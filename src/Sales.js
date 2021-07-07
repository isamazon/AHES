import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./components/nav";
import "./styles/sales.css";
import axios from "axios";

function Sales() {
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
      <Container fluid className="gallery-cont">
        <Row className="row-1">
          <Col xl={12}>
            <div>{textBoxValue}</div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input ref={currentTextValue} type="text" required />
              <input type="submit" value="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sales;
