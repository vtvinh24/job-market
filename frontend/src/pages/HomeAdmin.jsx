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
        // <div className="App">
        //   <header className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //       <a className="navbar-brand logo" href="#">Logo</a>
        //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //       </button>
        //       <div className="collapse navbar-collapse" >
        //         <div className='navbar-nav me-auto mb-2 mb-lg-0 navbar-items'>
        //             <div className='nav-item'><a className="nav-link" href="#jobmarket">JobMarket</a></div>
        //             <div className='nav-item'><a className="nav-link" href="#comisson-market">Comisson Market</a></div>
        //             <div className='nav-item'><a className="nav-link" href="#company">Company</a></div>
        //             <div className='nav-item'><a className="nav-link" href="#advise">Advise</a></div>
        //             <div className='nav-item'><a className="nav-link" href="#blog">Blog</a></div>
                    
        //         </div>
        //         {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //           <li className="nav-item">
        //             <a className="nav-link" href="#jobmarket">JobMarket</a>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#comisson-market">Comisson Market</a>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#company">Company</a>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#advise">Advise</a>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#blog">Blog</a>
        //           </li>
        //         </ul> */}
        //         <div className="d-flex">
        //           <button className="btn btn-outline-secondary me-2">Login</button>
        //           <button className="btn btn-secondary">Sign Up</button>
        //         </div>
        //       </div>
        //     </div>
        //   </header>
        //   <div className='carousel-container'>
        //   <Carousel data-bs-theme="dark" className='Carousel' >
        //     <Carousel.Item>
        //     <div className="p-3 border bg-light text-center content-boxs">Content Box 1</div>

        //     </Carousel.Item>
        //     <Carousel.Item>
        //     <div className="p-3 border bg-light text-center content-boxs">Content Box 2</div>
              
        //     </Carousel.Item>
        //     <Carousel.Item>
        //     <div className="p-3 border bg-light text-center content-boxs">Content Box 3</div>
              
        //     </Carousel.Item>
        //   </Carousel>
        //   </div>
        //   {/* <main className="container my-4">
        //     <div className="row">
        //       <div className="col-md-4 mb-3 content-boxs">
        //         <div className="p-3 border bg-light text-center content-boxs">Content Box</div>
        //       </div>
        //       <div className="col-md-4 mb-3 content-boxs">
        //         <div className="p-3 border bg-light text-center content-boxs">Content Box</div>
        //       </div>
        //       <div className="col-md-4 mb-3 content-boxs">
        //         <div className="p-3 border bg-light text-center content-boxs">Content Box</div>
        //       </div>
        //     </div>
        //     <div className="mt-4">
        //       <h2>Hot News</h2>
        //       <div className="p-3 border bg-light text-center">New Box</div>
        //     </div>
        //   </main> */}
        //   <div  className='hot-news'>
        //     <div className="mt-4">
        //     <h2>Hot News</h2>
        //     <div className="p-3 border bg-light text-center new-box">New Box</div>
        // </div>

        //   </div>
        //   <footer className="text-end p-3">
        //     <div className="text-muted">Help Center</div>
        //   </footer>
        // </div>
    );
}

export default HomeGuest