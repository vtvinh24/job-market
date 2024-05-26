import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';

const HomeNavbar = ({ user }) => {
    return (
        <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#" style={{backgroundColor:'darkgray', padding: '20px 40px 20px 40px'}}>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'space-between',marginLeft: 'auto' }}>
                <Nav className="mr-auto container" style={{ justifyContent: 'space-evenly'}}>
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
                    <Nav className='container' style={{ justifyContent: 'flex-end' }}>
                        <Button variant="outline-secondary" onClick={() => window.location.href = '/login'}>Login</Button>
                        <Button variant="outline-secondary" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
                    </Nav>
                    
                    
                )}
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default HomeNavbar;