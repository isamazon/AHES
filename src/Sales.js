import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./components/nav";
import "./styles/sales.css";
import axios from "axios";

function Sales(props) {
  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState([]);

  const fetchData = () => {
    axios
      .get("https://hot-potatoes.herokuapp.com/api/description")
      .then((data) => setValue(data.data));
  };

  const fetchPhotos = () => {
    axios
      .get("http://localhost:5000/api/file")
      .then((data) => setPhotos(data.data));
  };

  useEffect(() => {
    fetchData();
    fetchPhotos();
  }, []);

  return (
    <div>
      <Nav />
      <Container fluid className="gallery-cont">
        <Row className="row-1">
          <h1 className="sale-h1">Items for sale!</h1>
          <p className="description-p">{value}</p>
          <div className="photo-container">
            {photos.map((x) => (
              <Col xl={4} key={x} className="">
                <img
                  src={`http://localhost:5000/api/file/${x}`}
                  className="item-photos"
                  alt="photos"
                />
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Sales;
