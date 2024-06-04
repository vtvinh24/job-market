import React from 'react';
import '../../assets/css/EnlistJob.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Form, Col } from 'react-bootstrap';
import backgroundImg from '../../assets/img/Stole.jpg'; // Assuming your image is named company_logo.png
import HomeNavbar from '../../components/HomeNavbar.jsx';
import Footer from '../../components/HomeFooter.jsx';
const EnlistJob = () => {

/* 

       COL 1 | COL 2 | COL 3
ROW 1  TITLE 
ROW 2  WORK TYPE | LOCATION
ROW 3  TAGS


*/

  return (
    <>
    <div className="App">
        <HomeNavbar />
        </div>
    <img src={backgroundImg} alt="Image" className="background-img"/>
    
      <Container className='container'>
        <Form className='form'>
          <Button href="/" className='back-button'>Back</Button>
        <Row><h1 className='header1'>Enlist a Job</h1></Row>
          <Row><h3 className='header2'>General Information</h3></Row>
          <Row><Form.Group controlId="title">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" placeholder="Enter job title" className='input' />
          </Form.Group>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId="workType">
                <Form.Label>Work Type</Form.Label>
                <Form.Control as="select">
                  <option>Office</option>
                  <option>Remote</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location">
                  </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
             <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" placeholder="Enter tags">
                 </Form.Control>
              </Form.Group>
            </Col>
        </Row>
        <Row><h3 className='header2'>Recruitment Settings</h3></Row>
        <Row>
            <Col md={3}>
              <Form.Group controlId="maxApplications">
                <Form.Label>Max applications</Form.Label>
                <Form.Control type="text" placeholder='Max Applications'>
                  </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="approvalmethod">
                <Form.Label>Approval method</Form.Label>
                <Form.Control as="select" placeholder='Approval method'>
                  <option>Auto</option>
                  <option>Manual</option>
                  </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="numberofrecruits">
                <Form.Label>Number of recruits</Form.Label>
                <Form.Control type="text" placeholder='Number of recruits'>
                  </Form.Control>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={3}>
              <Form.Group controlId="startdate">
                <Form.Label>Start date</Form.Label>
                <Form.Control type="date" placeholder='Start date'>
                  </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="enddate">
                <Form.Label>End date</Form.Label>
                <Form.Control type="date" placeholder='End date'>
                  </Form.Control>
              </Form.Group>
            </Col>
            <Row>
            <Col md={3}>
              <Form.Group controlId="CV">
                <Form.Label>Document: CV</Form.Label>
                <Form.Control as="type"  placeholder='Document: CV'>
               </Form.Control>
              </Form.Group>
            </Col>
            </Row>
            <Row><h3 className='header2'>Compensation</h3></Row>
            <Row>
            <Col md={3}>
              <Form.Group controlId="compensationType">
                <Form.Label>Compensation type</Form.Label>
                <Form.Control as="select" placeholder='Compensation type'>
                  <option>One-time</option>
                  <option>Periodcally</option>
                  <option>Other</option>
                  </Form.Control>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={3}>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder='Amount'>
                  </Form.Control>
              </Form.Group>
              </Col>
            <Col md={1}>
              <Form.Group controlId="money">
                <Form.Label>*</Form.Label>
                <Form.Control as="select" placeholder='money'>
                  <option>VND</option>
                  <option>EUR</option>
                  <option>USD</option>
                  <option>POUND</option>
                  </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2}>
            <Form.Label>per</Form.Label>
            <Form.Control as="select" placeholder='per'>
                  <option>month</option>
                  <option>week</option>
                  <option>day</option>
                  </Form.Control>
            </Col>
            <Col md={5}>
            <Form.Label>Custom Iteration</Form.Label>
            <Form.Control type="text" placeholder='Custom Iteration/hours per day'>
                  </Form.Control>
            </Col>
            </Row>
            <Row><h3 className='header2'>Additional Information</h3></Row>
            <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder='Enter Description'>
                  </Form.Control>
            </Col>
            <Row>
            <Col>
            <Form.Label>Contact Info</Form.Label>
            <Form.Control type="text" placeholder='Contact Info*'>
                  </Form.Control>
            </Col>
            </Row>
            
           
            
          </Row>   
          <Button type="submit" className='enlistbutton'>Enlist</Button>
       </Form>
       
      </Container>
      
      <Footer />
      
    </>
  );

}

export default EnlistJob;