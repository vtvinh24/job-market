import React from "react";
import "../../assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpCenter from "../../components/HelpCenter.jsx";
import CarouselComponent from "../../components/HomeCarousel.jsx";
import HotNew from "../../components/HotNew.jsx";

function HomeGuest() {
  return (
    <div className="App">
      <CarouselComponent />
      <HelpCenter />
      <HotNew />

      {/* <TestData /> */}
    </div>
  );
}

export default HomeGuest;
