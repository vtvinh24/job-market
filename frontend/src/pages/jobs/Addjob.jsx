import React from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from '../../components/HomeNavbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Addjob.css';
import HomeFooter from '../../components/Footer.jsx'
import HelpCenter from '../../components/HelpCenter.jsx';
function Addjob() {
  return (
    <div  className="home-navbar">
      <HomeNavbar />
      <div className="custom-container">
        <label className="addjob-text">Job Manager</label>
        <label className="custom-label">Add Job</label>
        
      </div>
      <div className="form-container">
        <Form>
          <Form.Group controlId="formJobName">
            <label class="form-label">Job's name:</label>
            <input type="text" placeholder="Enter job's name" class="form-input" />
            <div className='formlabel-2'>
            <label class="form-label">Company:</label>
            <input type="text" placeholder="Enter Company's name" class="forminput2" />
            <div>
            <label class="form-label">Address:</label>
            <textarea placeholder="Enter Address" class="forminput3" />
            </div>
            <div>
            <label class="form-label">Skills:</label>
            <input type="text"  class="forminput4" />
            <input type="text"  class="forminput4" />
            <input type="text"  class="forminput4" />
            <input type="text"  class="forminput4" />
            <input type="text"  class="forminput4" />
            </div>
            <div>
            <label class="form-label">Description:</label>
            <textarea placeholder="Enter Description" className="forminput5" rows="8" />
            </div>
            <div>
            <label class="form-label">Requirement:</label>
            <textarea placeholder="Enter Requirement" className="forminput6" rows="8" />
            </div>
           <div class="Submit"><button type="submit" >Add Job</button></div>
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className='footer'>
      <HomeFooter />
      <HelpCenter />
      </div>
    </div>
  );
}
export default Addjob;