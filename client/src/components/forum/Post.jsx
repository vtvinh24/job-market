import { getMoment } from "../../functions/Converter.js";
import avatar from "../../assets/img/default_avatar.webp";
import usePostDetail from "../../hooks/forum/usePostDetail.js";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import NavigateButton from "../buttons/NavigateButton.jsx";
import usePostDelete from "../../hooks/forum/usePostDelete.js";

const Post = ({ post_id }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const { post, loading, error } = usePostDetail(post_id);
  const user_id = 1;
  const { deletePost } = usePostDelete();
  const username = "andz1207";

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post? " + post_id
    );
    if (confirmDelete) {
      deletePost(post_id);
      navigate("/forum");
    }
  };

  return (
    <Container
      style={{ minHeight: "100vh", minWidth: "80vw" }}
      className="post"
    >
      <div className="post-title">
        <h1>{post.post_title} </h1>
        {post.username == username && (
          <>
            <NavigateButton
              path={`/forum/edit/${post_id}`}
              text="Edit"
              variant="primary"
            />
            <Button variant="danger" onClick={() => handleDeletePost()}>
              Delete
            </Button>
          </>
        )}
      </div>
      <div className="d-flex gap-2">
        <div className="post-author">
          <div>
            <img className="avatar" src={avatar} alt="Default Avatar" />
          </div>
          <div>
            <Link to={`/users/${post.username}`}>{post.username}</Link>
          </div>
          <div>
            <p>{getMoment(post.post_updated_time)}</p>
          </div>
        </div>
        <div className="post-content flex-grow">
          <p>{post.post_content}</p>
        </div>
      </div>
    </Container>
  );
};

export default Post;