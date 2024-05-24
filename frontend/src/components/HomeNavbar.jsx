import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

const HomeNavbar = ({ user }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'space-between',marginLeft: 'auto' }}>
                <Nav className="mr-auto container">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                    <Nav.Link href="/forum">Forum</Nav.Link>
                </Nav>
                {user ? (
                    <Nav>
                        <NavDropdown title={user.name} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#profile">User Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                ) : (
                    <Nav className='container'>
                        <Button variant="outline-secondary" onClick={() => window.location.href = '/login'}>Login</Button>
                        <Button variant="outline-secondary" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
                    </Nav>
                    
                    
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomeNavbar;