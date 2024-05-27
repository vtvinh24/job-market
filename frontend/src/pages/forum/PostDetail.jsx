import React from "react";
import { Link, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail.js"; // Assuming the hook is exported from this file
import HomeNavbar from "../../components/HomeNavbar.jsx";
import HomeFooter from "../../components/HomeFooter.jsx";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter.js";

const PostDetail = () => {
  const { id } = useParams();
  const { post, loading, error } = usePostDetail(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <HomeNavbar />
      <Col md={2}>
        <Button href="/forum" className="forum-button">
          Back to Forum
        </Button>
      </Col>
      <Container className="post">
        <h1>{post.title}</h1>
        <Link to={`/users/${post.author}`}>{post.author}</Link>
        <p>{getMoment(post.created_timestamp)}</p>
        <p className="post-content">{post.content}</p>
      </Container>
      <HomeFooter />
    </>
  );
};

export default PostDetail;
