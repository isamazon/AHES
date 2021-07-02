import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// images
import money from "../assets/money2.png";
import question from "../assets/question2.png";
import help from "../assets/help2.png";
import ad from "../assets/ad.jpg.png";
function landing2() {
  return (
    <Container fluid className="about-section">
      <div className="topwave"></div>
      <Row className="about-row">
        <Col xl={3} lg={2} className="info-col">
          <div className="inner-col">
            <img src={question} alt="" className="col-img" />
            <h3 className="info-h3">Who we are</h3>
            <p className="info-p">
              American Household Estate Sales , a professional estate sale
              company, serving Albuquerque, Rio Rancho, and surrounding area.
              17+ years in business,
            </p>
          </div>
        </Col>
        <Col xl={3} lg={2} className="info-col">
          <div className="inner-col">
            <img src={money} alt="" className="col-img" />
            <h3 className="info-h3">Consultation</h3>
            <p className="info-p">
              Initial consultation is free. We are paid a percentage of the
              gross income of the sale. There are no up-front costs to you.
            </p>
          </div>
        </Col>
        <Col xl={3} lg={2} className="info-col">
          <div className="inner-col">
            <img src={help} alt="" className="col-img" />
            <h3 className="info-h3">We help</h3>
            <p className="info-p">
              American Household Estate Sales , a professional estate sale
              company, serving Albuquerque, Rio Rancho, and surrounding area.
              17+ years in business,
            </p>
          </div>
        </Col>
        <Col xl={3} lg={2} className="info-col">
          <div className="inner-col">
            <img src={ad} alt="" className="col-img" />
            <h3 className="info-h3">advertising</h3>
            <p className="info-p">
              We advertise on line and also have an extensive email and mailing
              list, as well as advertising the sale on our website. We sell
              everything from household items , vehicles, etc, items such as
              jewelry, fine art, antiques, will be appraised.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default landing2;
