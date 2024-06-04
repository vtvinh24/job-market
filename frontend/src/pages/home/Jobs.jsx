import React from 'react';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';

const Jobs = () => {
    const handleAddJob = () => {
        alert('Add Job function not implemented.');
    };

    const handleEditJob = () => {
        alert('Edit Job function not implemented.');
    };

    const handleDeleteJob = () => {
        alert('Delete Job function not implemented.');
    };

    return (
        <div>
            <header className="bg-dark text-white text-center py-3">
                <h1>Admin Dashboard - Job Management</h1>
            </header>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/jobs">Jobs</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <div className="mb-3">
                    <Button variant="success" onClick={handleAddJob}>
                        Add New Job
                    </Button>
                </div>
                <JobCard
                    title="Software Engineer"
                    company="Tech Corp"
                    location="Da Nang"
                    posted="2 days ago"
                    onEdit={handleEditJob}
                    onDelete={handleDeleteJob}
                />
                <JobCard
                    title="Product Manager"
                    company="Innovate Ltd"
                    location="HCM city"
                    posted="3 days ago"
                    onEdit={handleEditJob}
                    onDelete={handleDeleteJob}
                />
                <JobCard
                    title="Data Analyst"
                    company="Data Insights"
                    location="Ha Noi"
                    posted="4 days ago"
                    onEdit={handleEditJob}
                    onDelete={handleDeleteJob}
                />
            </Container>
        </div>
    );
};

const JobCard = ({ title, company, location, posted, onEdit, onDelete }) => (
    <Card className="mb-4 shadow-sm">
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-muted">
                Company: {company} | Location: {location} | Posted: {posted}
            </Card.Text>
            <Card.Text>.......</Card.Text>
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

export default Jobs;
