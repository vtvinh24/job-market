
import React from "react";
import "../../assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpCenter from "../../components/HelpCenter.jsx";
import HomeNavbar from "../../components/HomeNavbar.jsx";
import CarouselComponent from "../../components/HomeCarousel.jsx";
import HotNew from "../../components/HotNew.jsx";
import Footer from "../../components/HomeFooter.jsx";
import TestData from "../../components/TestData.jsx";

function HomeGuest() {
  return (
    <div className="App">
      {/* <HomeNavbar /> */}
      <CarouselComponent />
      <HelpCenter />
      <HotNew />
      {/* <Footer /> */}
    </div>
  );
}

export default HomeGuest;
