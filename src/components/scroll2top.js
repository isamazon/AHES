import { Component, useState } from "react";
// CSS
import "../styles/home.css";
// Icons
import { FaArrowCircleUp } from "react-icons/fa";
// Dependencies
import { Link } from "react-scroll";

function Scrolltop(props) {
  // Setting the initial state for button
  const [button, setButton] = useState(false);
  const appear = () => {
    if (window.scrollY >= 500) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  window.addEventListener("scroll", appear);
  return (
    <div>
      <Link
        className={button ? props.scrolltopclass : props.scrolltophidden}
        to={props.scrollTo}
        spy={true}
        smooth={true}
      >
        <FaArrowCircleUp size="70px" className={props.arrowup} />
      </Link>
    </div>
  );
}

export default Scrolltop;
