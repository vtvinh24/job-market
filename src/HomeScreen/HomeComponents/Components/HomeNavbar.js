import React from 'react';

function HomeNavbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className='navbar-nav me-auto mb-2 mb-lg-0 navbar-items'>
            <div className='nav-item'><a className="nav-link" href="#jobmarket">JobMarket</a></div>
            <div className='nav-item'><a className="nav-link" href="#comisson-market">Comisson Market</a></div>
            <div className='nav-item'><a className="nav-link" href="#company">Company</a></div>
            <div className='nav-item'><a className="nav-link" href="#advise">Community</a></div>
            <div className='nav-item'><a className="nav-link" href="#blog">Blog</a></div>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-secondary me-2">Login</button>
            <button className="btn btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
