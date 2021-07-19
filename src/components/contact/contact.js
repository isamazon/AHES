import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// CSS
import "../../styles/contact.css";
import Logo from "../../assets/logo.png";
import Nav from "../nav";
function Contact() {
  return (
    <div>
      <Nav />
      <Container fluid className="contact-container">
        <Row className="contact-row">
          <Col xl={4} className="contact-info-col">
            <h1>Contact information</h1>
            <p>
              If you have any questions, please do not hesitate to send us a
              message. We reply within 24 hours !
            </p>
          </Col>
          <Col xl={8} className="contact-form-col">
            <img src={Logo} className="logo" alt="" />
            <form action="">
              <div className="name-inputs">
                <input
                  type="text"
                  placeholder="First name"
                  className="name-input"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="name-input"
                />
              </div>
              <div className="name-inputs">
                <input
                  type="text"
                  placeholder="Subject"
                  className="name-input"
                />
                <input type="text" placeholder="Email" className="name-input" />
              </div>
              <div className="name-inputs">
                <textarea className="textbox" />
              </div>
              <input
                type="submit"
                value="Send message"
                className="submit-message"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
