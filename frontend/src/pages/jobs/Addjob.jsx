import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "../../components/HomeNavbar.jsx";
import HomeFooter from "../../components/HomeFooter.jsx";
import HelpCenter from "../../components/HelpCenter.jsx";
function AddJob() {
  return (
    <div className="home-navbar">
      <HomeNavbar />
      <div className="custom-container">
        <label className="addjob-text">Job Manager</label>
        <label className="custom-label">Add Job</label>
      </div>
      <div className="form-container">
        <Form>
          <Form.Group controlId="formJobName">
            <label className="form-label">Job's name:</label>
            <input
              type="text"
              placeholder="Enter job's name"
              className="form-input"
            />
            <div className="formlabel-2">
              <label className="form-label">Company:</label>
              <input
                type="text"
                placeholder="Enter Company's name"
                className="forminput2"
              />
              <div>
                <label className="form-label">Address:</label>
                <textarea placeholder="Enter Address" className="forminput3" />
              </div>
              <div>
                <label className="form-label">Skills:</label>
                <input type="text" className="forminput4" />
                <input type="text" className="forminput4" />
                <input type="text" className="forminput4" />
                <input type="text" className="forminput4" />
                <input type="text" className="forminput4" />
              </div>
              <div>
                <label className="form-label">Description:</label>
                <textarea
                  placeholder="Enter Description"
                  className="forminput5"
                  rows="8"
                />
              </div>
              <div>
                <label className="form-label">Requirement:</label>
                <textarea
                  placeholder="Enter Requirement"
                  className="forminput6"
                  rows="8"
                />
              </div>
              <div className="Submit">
                <button type="submit">Add Job</button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className="footer">
        <HomeFooter />
        <HelpCenter />
      </div>
    </div>
  );
}
export default AddJob;
