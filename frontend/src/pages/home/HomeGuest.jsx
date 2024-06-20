
import React from "react";
import "../../assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpCenter from "../../components/HelpCenter.jsx";
import HomeNavbar from "../../components/HomeNavbar.jsx";
import CarouselComponent from "../../components/home/HomeCarousel.jsx";
import HotNew from "../../components/home/HotNew.jsx";
import Footer from "../../components/HomeFooter.jsx";
import TestData from "../../components/TestData.jsx";
import HotJobs from '../../components/home/HotJobs.jsx';


function HomeGuest() {
  return (
    <div className="App">
      {/* <HomeNavbar /> */}
      <CarouselComponent />
      <HelpCenter />
      <HotJobs/>
      <HotNew />
      <Footer />
    </div>
  );
}

export default HomeGuest;
