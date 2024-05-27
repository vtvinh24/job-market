import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import usePostInsert from "../../hooks/usePostInsert";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { insertPost, loading, error } = usePostInsert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const author = 1; // Set author here
    await insertPost(title, content, author); // Use insertPost here
  };
  
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Button href="/forum" className="forum-button">
            Back to Forum
          </Button>
        </Col>
        <Col md={10}>
          <h1 className="text-center">Create a Post</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {" "}
          {/* Add margin bottom */}
          {/* <Col md={2}>
            <Form.Group controlId="category">
          
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="ask">Ask</option>
                <option value="advice">Advice</option>
                <option value="discussion">Discussion</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col> */}
          {/* <Col md={10}> */}
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
        <Row className="mb-3">
          {" "}
          {/* Add margin bottom */}
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
      </Form>
    </Container>
  );
};

export default AddForm;
