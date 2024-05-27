import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import "../../assets/css/Forum.css";
import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";
import AddForm from "../../components/forum/AddForm";

const AddPost = () => {
  return (
    <>
      <HomeNavbar />
      <Col md={2}>
        <Button href="/forum" className="forum-button">
          Back to Forum
        </Button>
      </Col>
      <AddForm />
      <HomeFooter />
    </>
  );
};

export default AddPost;
