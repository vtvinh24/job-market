// Marketplace.js
import React from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from '../../components/HomeNavbar.jsx';
import HelpCenter from '../../components/HelpCenter.jsx';
import Footer from '../../components/HomeFooter.jsx';

// import './Marketplace.css'; // Custom styles (optional)

function JobMarket() {
  return (
    <>

      <HomeNavbar />

      

      <Container className="mt-3">
        <Row className="align-items-center mb-3">
          <Col md={3}>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col md={3}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Choose Place
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Price" />
          </Col>
        </Row>
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>     
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row> 
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row> 
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div iv className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>      
        <Row>
        <div className="p-3 border bg-light">Content Box</div>
        </Row>     
      </Container>
      <HelpCenter />

      <Footer />
    </>
  );
}

export default JobMarket;
