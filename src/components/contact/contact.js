import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// CSS
import "../../styles/contact.css";
import Logo from "../../assets/logo.png";
import Nav from "../nav";
import AOS from "aos";
import "aos/dist/aos.css";
// Stars
import Star1 from "../SVGS/bluestar";
import Star2 from "../SVGS/redstar";
import Star3 from "../SVGS/star";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1qn4qb",
        "template_54bvllb",
        e.target,
        "user_JND4DxYErSVDiRhTJiVVb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Nav />
      <Container fluid className="contact-container">
        <Row
          className="contact-row"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <Col xl={4} className="contact-info-col">
            <h1>Contact information</h1>
            <p>
              If you have any questions, please do not hesitate to send us a
              message. We reply within 24 hours !
            </p>
            <ul className="contact-list">
              <li className="list-item">
                <AiOutlineMail /> Email: amerestatesales@gmail.com
              </li>
              {/* <li className="list-item">
                <FaPhoneAlt />
                Phone:
              </li>
              <li className="list-item">Website:</li> */}
            </ul>
            <div className="stars">
              <div className="star1">
                <Star1 height="80px" />
              </div>
              <div className="star2">
                <Star2 height="80px" />
              </div>
              <div className="star3">
                <Star3 height="80px" />
              </div>
              <div className="star4">
                <Star3 height="80px" />
              </div>
              <div className="star5">
                <Star1 height="80px" />
              </div>
            </div>
          </Col>
          <Col xl={8} className="contact-form-col">
            <img src={Logo} className="logo" alt="" />
            <form onSubmit={sendEmail}>
              <div className="name-inputs">
                <input
                  type="text"
                  placeholder="First name"
                  name="name"
                  className="name-input"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="name-input"
                />
              </div>
              <div className="name-inputs">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="name-input"
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="name-input"
                />f
              </div>
              <div className="name-inputs">
                <textarea className="textbox" name="message" />
              </div>
              <input
                type="submit"
                value="Send message"f
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
