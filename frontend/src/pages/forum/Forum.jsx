import React from "react";
import ListPost from "../../components/forum/ListPost";
import { Button, Row } from "react-bootstrap";

const Forum = () => {
  return (
    <div className="forum-body">
      <Button className="forum-button" href="/forum/add">
        Create
      </Button>

      <Row>
        <ListPost />
      </Row>
    </div>
  );
};

export default Forum;
