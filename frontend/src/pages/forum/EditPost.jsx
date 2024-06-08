import React from "react";
import { Link, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail.js";
import usePostUpdate from "../../hooks/usePostUpdate.js";
import { Button, Row, Col } from "react-bootstrap";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter.js";
import avatar from "../../assets/img/default_avatar.webp";

const EditPost = () => {
  const { id } = useParams();
  const { post, loading, error: postError } = usePostDetail(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { editPost } = usePostUpdate();
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="forum-body">
      <Button href="/forum" className="forum-button">
        Back to Forum
      </Button>

      <div className="post">
        <div className="post-title">
          <h1>{post.post_title}</h1>
        </div>
        <div className="d-flex gap-2">
          <div className="post-author">
            <div><img className="avatar" src={avatar} alt="Default Avatar" /></div>
            <div><Link to={`/users/${post.username}`}>{post.username}</Link></div>
            <div><p>{getMoment(post.post_created_date)}</p></div>
          </div>
          <div className="post-content flex-grow">
            <p>{post.post_content}</p>
          </div>
        </div>
      </div>
    </div>
  );

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Title and content must not be empty");
      return;
    }


    //const user_id = userContext.user_id;
    const user_id = 3; // Set author here
    const result = await insertPost(title, content, user_id);

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
        <Row className="mb-3">
          <Form.Group controlId="content">
            {/* <Form.Label>Content</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="row-submit">
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

export default EditPost;
