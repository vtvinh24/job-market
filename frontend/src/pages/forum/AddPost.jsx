import React from "react";
import { Col, Button } from "react-bootstrap";
import AddForm from "../../components/forum/AddForm";

const AddPost = () => {
  return (
    <>
      
      <Col md={2}>
        <Button href="/forum" className="forum-button">
          Back to Forum
        </Button>
      </Col>
      <AddForm />
      
    </>
  );
};

export default AddPost;
