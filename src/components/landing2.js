import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import aos from "aos";
// images
import money from "../assets/money2.png";
import question from "../assets/question2.png";
import help from "../assets/help2.png";
import ad from "../assets/ad.jpg.png";
import Letter from "./SVGS/letter";
import Star from "./SVGS/star";
import Redstar from "./SVGS/redstar";
import Bluestar from "./SVGS/bluestar";
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
      <Row className="mailing-row">
        <div className="stars">
          <Star height="85px" />
        </div>
        <div className="star2" id="star2">
          <Redstar height="85px" />
        </div>
        <div className="star3" id="star2">
          <Bluestar height="85px" />
        </div>
        <div className="star4" id="star2">
          <Redstar height="85px" />
        </div>
        <div className="star5" id="star2">
          <Star height="85px" />
        </div>
        <div className="star6" id="star2">
          <Bluestar height="85px" />
        </div>
        <Col xl={6} md={12} className="info-mail">
          <h1 className="newsletter-h1">Subscribe to our newsletter!</h1>
          <p className="newsletter-p">
            Get an advantage by subscribing to our newsletter to get weekly
            updates on whats up for sale!
          </p>
          <form className="subscribe-form">
            <input
              className="subscribe-email"
              name="email"
              placeholder="Enter your email here"
              type="email"
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </Col>
        <Col xl={6} md={12} className="subscribe-col">
          <Letter width="80%" />
        </Col>
      </Row>
    </Container>
  );
}

export default landing2;
