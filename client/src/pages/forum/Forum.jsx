import { Button, Col, Container, Row } from "react-bootstrap";
import NavigateButton from "../../components/ui/buttons/NavigateButton";
import ListPost from "../../components/forum/ListPost";

const Forum = () => {
  return (
    <Container>
      <Row>
        
          <Col md={2} className="border me-5">
            <div>
              <p>User statuses here.</p>
            </div>
          </Col>
        <Col>
          <Row className="border">
            <Col md={6} sm={12} className="border border-primary align-items-center">
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
            <h1>List posts</h1>
            <ListPost />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Forum;
