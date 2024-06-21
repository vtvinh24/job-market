import ListPost from "../../components/forum/ListPost";
import { Row, Container } from "react-bootstrap";
import NavigateButton from "../../components/buttons/NavigateButton";

const Forum = () => {
  return (
    <Container className="forum-body">
      <NavigateButton
        path="/forum/add"
        text="Create Post"
        variant="primary"
      />

      <Row>
        <ListPost />
      </Row>
    </Container>
  );
};

export default Forum;
