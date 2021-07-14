import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import landingpage from "../assets/landingpage.png";
function Landingpage() {
  return (
    <Container fluid className="landing-page-cnt">
      <div className="landingpage-bg"></div>
      <Row className="row-1">
        <Col xl={7} md={12} sm={12} className="col-1">
          <h1 className="welcome-h1">
            Welcome, to American Household Estate Sales
          </h1>
          <div className="link-container">
            <Link to="/Sales" className="link-1">
              <button className="button-1">Upcoming Sales</button>
            </Link>
            <Link to="/" className="link-1">
              <button className="button-1 about-btn">About</button>
            </Link>
          </div>
        </Col>
        <Col xl={5} md={12} className="col-2">
          <div className="item-img"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landingpage;
