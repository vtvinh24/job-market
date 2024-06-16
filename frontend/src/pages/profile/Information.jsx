import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Information = () => {
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
          <Form>
            <Form.Group as={Row} controlId="strengths">
              <Form.Label column sm={2}>Strengths</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="List your strengths" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="weaknesses">
              <Form.Label column sm={2}>Weaknesses</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="List your weaknesses" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="shortbio">
              <Form.Label column sm={2}>Short Bio</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="Bio" />
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

export default Information;
