
import React from "react";
import "../../assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpCenter from "../../components/HelpCenter.jsx";


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
