import React from "react";
import { Col, Button } from "react-bootstrap";
import AddForm from "../../components/forum/AddForm";

const AddPost = () => {
  return (
    <div className="forum-body">
      <Col md={2}>
        <Button href="/forum" className="forum-button">
          Back to Forum
        </Button>
      </Col>
      <AddForm />
      
    </div>
  );
};

export default AddPost;
