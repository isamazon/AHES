import React from "react";

// Components
import Landing from "./components/landing";
import Nav from "./components/nav";
import Landing2 from "./components/landing2";
function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Landing2 />
    </div>
  );
}

export default Home;
