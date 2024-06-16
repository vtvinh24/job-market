import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('User Name');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setUsername(fullName);
  };

  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col md={3} className="bg-dark text-white p-4">
            <h2>Navigation</h2>
            <Nav className="flex-column">
              <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
              <Nav.Link href="/information" className="text-white">Information</Nav.Link>
              <Nav.Link href="/security" className="text-white">Security</Nav.Link>
              <Row>
                <Col><Button variant="danger" href="/logout">Log Out</Button></Col>
              </Row>
            </Nav>
          </Col>
          <Col md={9} className="p-4">
            <Card className="mb-4">
              <Card.Body>
                <div className="profile-header text-center mb-4">
                  <img 
                    src={selectedImage || "https://via.placeholder.com/150"} 
                    alt="Profile Image" 
                    className="rounded-circle" 
                    style={{ width: '150px', height: '150px', cursor: 'pointer' }} 
                    onClick={handleImageClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <h2>{username}</h2>
                </div>
                <Form onSubmit={handleNameSubmit}>
                  <Form.Group as={Row} controlId="fullName">
                    <Form.Label column sm={2}>Full Name</Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        type="text" 
                        placeholder="Full Name" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} 
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="dob">
                    <Form.Label column sm={2}>Date of Birth</Form.Label>
                    <Col sm={10}>
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="address">
                    <Form.Label column sm={2}>Address</Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Address" />
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
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
