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
      <Container>
        <h1>{value}</h1>
        {photos.map((x) => (
          <div key={x} className="">
            <img
              src={`http://localhost:5000/api/file/${x}`}
              alt="some stuff uwu"
            />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Sales;
