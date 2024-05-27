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
      <AddForm />
      <HomeFooter />
    </>
  );
};

export default AddPost;
