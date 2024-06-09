import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import usePostDetail from "../../hooks/usePostDetail.js";
import usePostUpdate from "../../hooks/usePostUpdate.js";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    editPost(title, content, post.user_id, post.post_id);
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Title and content must not be empty");
      return;
    }

    if (result) {
      navigate(`/posts/${post.post_id}`);
    }
  };

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
            <div>
              <img className="avatar" src={avatar} alt="Default Avatar" />
            </div>
            <div>
              <Link to={`/users/${post.username}`}>{post.username}</Link>
            </div>
            <div>
              <p>Editing</p>
            </div>
          </div>
          <div className="post-content flex-grow">
            <p contentEditable>{post.post_content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
