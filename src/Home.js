import React from "react";
//
import "./styles/home.css";
// Components
import Landing from "./components/landing";
import Nav from "./components/nav";
import Landing2 from "./components/landing2";
import Scrolltop from "./components/scroll2top";
function Home() {
  return (
    <div>
      <Nav />
      <Scrolltop
        scrolltopclass="scroll-up-btn-ctn green-btn "
        scrolltophidden="scroll-up-btn-hidden"
        arrowup="arrow-up"
        scrollTo="top"
      />
      <Landing scrollto="anchor" topid="top" />
      <Landing2 scrollanchor="anchor" />
    </div>
  );
}

export default Home;
