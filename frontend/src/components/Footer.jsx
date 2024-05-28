import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-dark text-white" style={{ marginTop: '20px', padding: '20px' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>We are a company that does things.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@company.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;