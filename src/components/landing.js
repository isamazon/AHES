import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Flag from "../assets/flagpng.png";
import Flagvideo from "../assets/flagvideo.mp4";
function Landingpage() {
  return (
    <div>
      <Container fluid className="landing-page-cnt">
        <video className="video1" poster={Flag} playsInline autoPlay loop muted>
          <source src={Flagvideo} playsInline type="video/mp4" />
        </video>
        <Row className="row-1">
          <Col className=""></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landingpage;
