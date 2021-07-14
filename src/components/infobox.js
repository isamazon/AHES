import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
function InfoBox(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col xl={3} lg={6} className="info-col">
      <div
        data-aos={props.animation}
        data-aos-offset="100"
        className="inner-col"
      >
        <img
          data-aos="fade-down"
          data-aos-duration="2000"
          src={props.img}
          alt=""
          className="col-img"
        />
        <h3 className="info-h3">{props.title}</h3>
        <p className="info-p">{props.infoText}</p>
      </div>
    </Col>
  );
}

export default InfoBox;
