import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import usePostInsert from "../../hooks/usePostInsert";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { insertPost } = usePostInsert();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Title and content must not be empty");
      return;
    }

    const author = 1; // Set author here
    const result = await insertPost(title, content, author);

    if (result) {
      navigate("/forum");
    }
  };

  return (
    <Container>
      <Row>
        <h1 className="text-center">Create a Post</h1>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="title">
              {/* <Form.Label>Title</Form.Label> */}
              <Form.Control
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5">
          <Form.Group controlId="content">
            {/* <Form.Label>Content</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit" className="forum-button">
            Submit
          </Button>
        </Row>
        <Row>
          <p className="text-danger mt-3">{error && <p>{error}</p>}</p>
        </Row>
      </Form>
    </Container>
  );
};

export default AddForm;
