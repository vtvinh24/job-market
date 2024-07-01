import ListPost from "../../components/forum/ListPost";
import { Button, Row, Col, Container } from "react-bootstrap";
import NavigateButton from "../../components/ui/buttons/NavigateButton";

const Forum = () => {
  return (
    <Container className="mt-5">
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
    </Container>
  );
};

export default Forum;