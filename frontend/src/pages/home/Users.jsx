import React from 'react';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';

const AdminUsers = () => {
    const handleAddUser = () => {
        alert('Add User function not implemented.');
    };

    const handleEditUser = () => {
        alert('Edit User function not implemented.');
    };

    const handleDeleteUser = () => {
        alert('Delete User function not implemented.');
    };

    return (
        <div>
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard - User Management</h1>
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
                <UserCard
                    name="Pham Duc Minh"
                    email="minh@gmail.com"
                    role="Admin"
                    registered="2 days ago"
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                />
                <UserCard
                    name="Truong Tuan Vinh"
                    email="vinh@gmail.com"
                    role="User"
                    registered="3 days ago"
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                />
                <UserCard
                    name="Do Minh Duc"
                    email="duc@gmail.com"
                    role="User"
                    registered="4 days ago"
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                />
            </Container>
        </div>
    );
};

const UserCard = ({ name, email, role, registered, onEdit, onDelete }) => (
    <Card className="mb-4 shadow-sm">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">
                Email: {email} | Role: {role} | Registered: {registered}
            </Card.Text>
            <Card.Text>Additional information...</Card.Text>
            <div className="d-flex justify-content-end">
                <Button variant="primary" className="mr-2" onClick={onEdit}>
                    Edit
                </Button>
                <Button variant="danger" onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </Card.Body>
    </Card>
);

export default AdminUsers;
