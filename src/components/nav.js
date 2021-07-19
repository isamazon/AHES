import React, { useState } from "react";
// Dependencies
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
// Components

// CSS
import "../styles/nav.css";
// images
import logo from "../assets/logo.png";
function Nav() {
  const [click, setClick] = useState(false);

  // Active navbar stat
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="/" className="brand">
        <img src={logo} className="logo-img" alt="" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        {/* Dropdown 1 */}
        {/* <li className="nav-item">
          <Link
            to="/Maleshounen"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li> */}
        {/* Dropdown 2 */}
        <li className="nav-item">
          <Link
            to="/Femaleshounen"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Sales" className="nav-links" onClick={closeMobileMenu}>
            Upcoming Sales
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
