import React from "react";
import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";
import ListPost from "../../components/forum/ListPost";
import { Button, Row, Col } from "react-bootstrap";

const Forum = () => {
  return (
    <div>
      <HomeNavbar />
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
        <Button href="/add-post" className="forum-button">Create a Post</Button>
        </Col>
      </Row>
      <ListPost />
      <HomeFooter />
    </div>
  );
};

export default Forum;