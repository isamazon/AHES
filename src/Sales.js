import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./components/nav";
import "./styles/sales.css";
import axios from "axios";

function Sales(props) {
  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState("");

  const fetchData = () => {
    axios
      .get("https://hot-potatoes.herokuapp.com/api/description")
      .then((data) => setValue(data.data));
  };

  const fetchPhotos = () => {
    axios
      .get("https://hot-potatoes.herokuapp.com/api/file")
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
            {clickedPhoto.length > 0 ? (
              <div>
                <button onClick={() => setClickedPhoto("")}>X</button>
                <img
                  src={`https://hot-potatoes.herokuapp.com/api/file/${clickedPhoto}`}
                />
              </div>
            ) : (
              photos.map((x) => (
                <Col
                  xl={4}
                  md={6}
                  key={x}
                  className=""
                  onClick={() => setClickedPhoto(x)}
                >
                  <img
                    src={`https://hot-potatoes.herokuapp.com/api/file/${x}`}
                    className="item-photos"
                    alt="photos"
                  />
                </Col>
              ))
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Sales;
