import React, { useState } from "react";
import { Col } from "react-bootstrap";

function Subscribe() {
  const [state, setState] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setState({ email: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.email) {
      fetch(`http://localhost:5000/api/memberAdd?email=${state.email}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Col xl={6} md={12} className="info-mail">
      <h1 className="newsletter-h1">Subscribe to our newsletter!</h1>
      <p className="newsletter-p">
        Get an advantage by subscribing to our newsletter to get weekly updates
        on whats up for sale!
      </p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          className="subscribe-email"
          name="email"
          onChange={handleChange}
          value={state.email}
          placeholder="Enter your email here"
          type="email"
        />
        <input className="submit-button" type="submit" value="subscribe!" />
      </form>
    </Col>
  );
}

export default Subscribe;
