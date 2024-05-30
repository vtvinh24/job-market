import React from "react";
import { Link, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail.js";
import { Button } from "react-bootstrap";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter.js";

const PostDetail = () => {
  const { id } = useParams();
  const { post, loading, error } = usePostDetail(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Button href="/forum" className="forum-button">
        Back to Forum
      </Button>

      <div className="post">
        <h1>{post.title}</h1>
        <Link to={`/users/${post.author}`}>{post.author}</Link>
        <p>{getMoment(post.created_timestamp)}</p>
        <p className="post-content">{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
