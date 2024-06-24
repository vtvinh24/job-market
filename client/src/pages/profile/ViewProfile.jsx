import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewProfile.css'; 
const ViewProfile = () => {
  const userData = {
    userAvatar: 'https://via.placeholder.com/150',
    username: '',
    fullName: '',
    dob: '',
    email: '',
    contactNumber: '',
    citizenId: '',
    address: '',
    strengths: '',
    weaknesses: '',
    bio: ''
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={3}>
          <Card className="profile-card text-center">
            <Card.Body>
              <div className="profile-header mb-4">
                <img
                  id="profileImage"
                  src={userData.userAvatar}
                  alt="Profile Image"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px', border: '3px solid #343a40' }}
                />
                <h2 id="username" style={{ marginTop: '15px', fontWeight: '700', color: '#343a40' }}>
                  {userData.username}
                </h2>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card className="profile-card mb-4">
            <Card.Body>
              <h4>Profile Details</h4>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Full Name:</strong> <span id="fullName">{userData.fullName}</span>
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> <span id="dob">{userData.dob}</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span id="email">{userData.email}</span>
                  </p>
                  <p>
                    <strong>Contact Number:</strong> <span id="contactnumber">{userData.contactNumber}</span>
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <strong>Citizen ID:</strong> <span id="citizenId">{userData.citizenId}</span>
                  </p>
                  <p>
                    <strong>Address:</strong> <span id="address">{userData.address}</span>
                  </p>
                </Col>
              </Row>
              <Button href='/profile' variant="primary" className="edit-btn">Edit</Button>
            </Card.Body>
          </Card>
          <Card className="profile-card project-status">
            <Card.Body>
              <h4>More Information</h4>
              <p>
                <strong>Strengths:</strong> <span id="strengths">{userData.strengths}</span>
              </p>
              <p>
                <strong>Weaknesses:</strong> <span id="weaknesses">{userData.weaknesses}</span>
              </p>
              <p>
                <strong>Bio:</strong> <span id="bio">{userData.bio}</span>
              </p>
              <Button href='information' variant="primary" className="edit-btn">Edit</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProfile;
