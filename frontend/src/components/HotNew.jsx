import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';

function HotNew() {
  return (
    <div className='hot-news container'>
      <div className="mt-4">
        <h2 style={{marginLeft: '20px', textAlign: 'left'}}>Hot News</h2>
        <Container>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        <div className="p-3 border bg-light text-center new-box" style={{marginBottom: '10px'}}>New Box</div>
        </Container>
      </div>
    </div>
  );
}

export default HotNew;
