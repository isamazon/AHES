import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// Components
import Landing from "./components/landing";
import Nav from "./components/nav";
function Home() {
  return (
    <div>
      <Nav />
      <Landing />
    </div>
  );
}

export default Home;
