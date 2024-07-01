import { Button, Col, Container, Row } from "react-bootstrap";
import NavigateButton from "../../components/ui/buttons/NavigateButton";
import ListPost from "../../components/forum/ListPost";

const Forum = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="border">
          <div>
            <p>User statuses here.</p>
          </div>
        </Col>
        <Col md={10}>
          <Row className="border">
            <Col
              md={6}
              className="border border-primary align-items-center ms-3"
            >
              search
            </Col>
            <Col md="auto">
              <NavigateButton
                path="/forum/add"
                variant="primary"
                text="Add Post"
              >
                Navigate
              </NavigateButton>
            </Col>
          </Row>
          <Row className="border">
            <ListPost />
          </Row>
        </Col>
      </Row>
      <Row className="border">
        <Col className="border" md={9}>
          <Row className="border">Chat history</Row>
          <Row className="border border-primary">Send new message</Row>
        </Col>
        <Col className="border" md={3}>Online users</Col>
      </Row>
    </Container>
  );
};

export default Forum;
