import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function aboutbtn(props) {
  return (
    <div className={props.divclassname}>
      <Link
        className={props.buttonclass}
        to={props.scrollto}
        spy={true}
        smooth={true}
      >
        About
      </Link>
    </div>
  );
}

export default aboutbtn;
