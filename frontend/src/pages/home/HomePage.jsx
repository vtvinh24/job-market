import React from 'react';
import '../../assets/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpCenter from '../../components/HelpCenter.jsx';
import HomeNavbar from '../../components/HomeNavbar.jsx';
import CarouselComponent from '../../components/HomeCarousel.jsx';
import HotNew from '../../components/HotNew.jsx';
import Footer from '../../components/Footer.jsx';

function HomeGuest() {
    return (
      <div className="App">
        <HomeNavbar />
        <CarouselComponent />
        <HotNew />
        <HelpCenter />
        <Footer /> 
      </div>
    );
}

export default HomeGuest