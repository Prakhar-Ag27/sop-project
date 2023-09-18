import React from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import HorizontalScroller from "./HorizontalScroller";

function Home() {
  return (<>
  <Navbar/>
  <Section1/>
  <Section2/>
  <HorizontalScroller/>
  <Section4/>
  </>
  );
}

export default Home;
