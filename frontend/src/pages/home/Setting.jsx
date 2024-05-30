import React from 'react';
import { Container, Navbar, Nav, Form, Button, Card } from 'react-bootstrap';

const AdminSettings = () => {
    const handleUpdateProfile = () => {
        alert('Update Profile function not implemented.');
    };

    const handleUpdateNotifications = () => {
        alert('Update Notifications function not implemented.');
    };

    return (
        <div>
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard - Settings</h1>
            </header>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand href="#dashboard">Dashboard</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#jobs">Jobs</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                        <Nav.Link href="#settings">Settings</Nav.Link>
                        <Nav.Link href="#logout">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Profile Settings</Card.Title>
                        <Form>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" defaultValue="admin" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue="admin@gmail.com" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Button variant="success" onClick={handleUpdateProfile}>
                                Update Profile
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Notification Settings</Card.Title>
                        <Form>
                            <Form.Group controlId="emailNotifications">
                                <Form.Label>Email Notifications</Form.Label>
                                <Form.Control as="select">
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="smsNotifications">
                                <Form.Label>SMS Notifications</Form.Label>
                                <Form.Control as="select">
                                    <option value="Enabled">Enabled</option>
                                    <option value="Disabled">Disabled</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" onClick={handleUpdateNotifications}>
                                Update Notifications
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AdminSettings;
