import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// images
import Topwave from "../assets/topwave.png";
function landing2() {
  return (
    <Container fluid className="about-section">
      <div className="topwave"></div>
      <Row className="about-row">
        <Col xl={4} className="info-col">
          <img src="" alt="" className="col-img" />
          <p>
            American Household Estate Sales , a professional estate sale
            company, serving Albuquerque, Rio Rancho, and surrounding area. 17+
            years in business,
          </p>
        </Col>
        <Col xl={4} className="info-col">
          <img src="" alt="" className="col-img" />
          <p>
            American Household Estate Sales , a professional estate sale
            company, serving Albuquerque, Rio Rancho, and surrounding area. 17+
            years in business,
          </p>
        </Col>
        <Col xl={4} className="info-col">
          <img src="" alt="" className="col-img" />
          <p>
            American Household Estate Sales , a professional estate sale
            company, serving Albuquerque, Rio Rancho, and surrounding area. 17+
            years in business,
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default landing2;
