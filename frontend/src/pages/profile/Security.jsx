import React from 'react';
import { Container, Form, FormGroup, Col, Button } from 'react-bootstrap';

const Security = () => {
  return (
    <div>
      <div className="sidebar">
        <h2>UserName</h2>
        <a href="/profile">Profile</a>
        <a href="/information">Information</a>
        <a href="/security">Security</a>
        <a href="/logout">Log Out</a>
      </div>
      <div className="main-content">
        <Container className="mt-5">
          <h2>Security Settings</h2>
          <Form>
            <FormGroup as={Row}>
              <Form.Label column sm={2}>Current Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" id="currentPassword" placeholder="Current Password" />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Form.Label column sm={2}>New Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" id="newPassword" placeholder="New Password" />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Form.Label column sm={2}>Confirm New Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" id="confirmPassword" placeholder="Confirm New Password" />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="primary">Save Changes</Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Security;
