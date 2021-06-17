import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Flag from "../assets/flagpng.png";
function Landingpage() {
  return (
    <div>
      <Container fluid className="landing-page-cnt">
        <img src={Flag} className="flag-pic" alt="" />
        <Row className="row-1"></Row>
      </Container>
    </div>
  );
}

export default Landingpage;
