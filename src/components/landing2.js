import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Infobox from './infobox';
import Subscribe from './subscribe';
// images
import money from '../assets/money2.png';
import question from '../assets/question2.png';
import help from '../assets/help2.png';
import ad from '../assets/ad.jpg.png';
import Letter from './SVGS/letter';
import Star from './SVGS/star';
import Redstar from './SVGS/redstar';
import Bluestar from './SVGS/bluestar';
function Landing2(props) {
  return (
    <Container fluid className="about-section" id={props.scrollanchor}>
      <div className="topwave"></div>
      <Row className="about-row">
        <Infobox
          img={question}
          animation="fade-up"
          title="Who we are"
          infoText="American Household Estate Sales , a professional estate sale company,
          serving Albuquerque, Rio Rancho, and surrounding area. 17+ years in
          business,"
        />
        <Infobox
          img={money}
          animation="fade-down"
          title="Consulation"
          infoText="Initial consultation is free. We are paid a percentage of the
        gross income of the sale. There are no up-front costs to you."
        />
        <Infobox
          img={help}
          animation="fade-up"
          title="We help"
          infoText="We can help: Moving, downsizing, loved one pass, this time can be very stressful, we can help! From selling the contents of the home to selling the home as well, give us a call."
        />
        <Infobox
          img={ad}
          animation="fade-down"
          title="Advertising"
          infoText="We advertise on line and also have an extensive email and mailing
      list, as well as advertising the sale on our website. We sell
      everything from household items , vehicles, etc, items such as
      jewelry, fine art, antiques, will be appraised."
        />
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
        <Subscribe />
        <Col xl={6} md={12} className="subscribe-col">
          <Letter width="80%" />
        </Col>
      </Row>
    </Container>
  );
}

export default Landing2;
