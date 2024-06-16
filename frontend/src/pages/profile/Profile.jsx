import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        height: '100vh',
        backgroundColor: '#343a40',
        color: 'white',
        padding: '20px',
        width: '220px',
        position: 'fixed'
      }}>
        <h2>UserName</h2>
        <a href="/profile" style={linkStyle}>Profile</a>
        <a href="/information" style={linkStyle}>Information</a>
        <a href="/security" style={linkStyle}>Security</a>
        <a href="/logout" style={linkStyle}>Log Out</a>
      </div>

      <div style={{ marginLeft: '220px', padding: '20px', width: '100%' }}>
        <Container className="mt-5">
          <div className="profile-header text-center mb-4">
            <img src="https://via.placeholder.com/150" alt="Profile Image" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
            <h2>User Name</h2>
          </div>
          <Form>
            <Form.Group as={Row} controlId="fullName">
              <Form.Label column sm={2}>Full Name</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Full Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="dob">
              <Form.Label column sm={2}>Date of Birth</Form.Label>
              <Col sm={10}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="citizenid">
              <Form.Label column sm={2}>Citizen ID</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Citizen ID" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="email">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="contactNumber">
              <Form.Label column sm={2}>Contact Number</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Contact Number" />
              </Col>
            </Form.Group>

            

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Save</Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  padding: '10px',
  margin: '10px 0',
};

export default Profile;
