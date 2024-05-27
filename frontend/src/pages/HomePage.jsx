import React from 'react'
import '../assets/css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFooter from '../components/HomeFooter.jsx';
import HomeNavbar from '../components/HomeNavbar.jsx';
import CarouselComponent from '../components/HomeCarousel.jsx';
import HotNew from '../components/HotNew.jsx';

function HomeGuest() {
    return (
      <div className="App">
        <HomeNavbar />
        <CarouselComponent />
        <HotNew />
        <HomeFooter />
      </div>
      
    );
}

export default HomeGuest