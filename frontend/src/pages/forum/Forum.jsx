import React from "react";
import ListPost from "../../components/forum/ListPost";
import { Button, Row } from "react-bootstrap";

const Forum = () => {
  return (
    <div>
      <Button className="forum-buton" href="/add-post">
        Create
      </Button>

      <Row>
        <ListPost />
      </Row>
    </div>
  );
};

export default Forum;
