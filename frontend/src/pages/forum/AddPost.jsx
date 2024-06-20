import { Col } from "react-bootstrap";
import AddForm from "../../components/forum/AddForm";
import NavigateButton from "../../components/buttons/NavigateButton";

const AddPost = () => {
  return (
    <div className="forum-body">
      <Col md={2}>
        <NavigateButton path="/forum" text="Back to Forum" variant="primary" />
      </Col>
      <AddForm />
    </div>
  );
};

export default AddPost;
