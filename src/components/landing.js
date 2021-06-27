import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import landingpage from "../assets/landingpage.png";
function Landingpage() {
  return (
    <div>
      <Container fluid className="landing-page-cnt">
        {/* <img src={landingpage} className="landingpage-bg" alt="" /> */}
        <div className="landingpage-bg"></div>
        <Row className="row-1">
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landingpage;
