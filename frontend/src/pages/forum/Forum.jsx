import React from "react";
import ListPost from "../../components/forum/ListPost";
import { Button, Row } from "react-bootstrap";
import NavigateButton from "../../components/buttons/NavigateButton";

const Forum = () => {
  return (
    <div className="forum-body">
      <NavigateButton
        path="/forum/add"
        text="Create Post"
        variant="primary"
      />

      <Row>
        <ListPost />
      </Row>
    </div>
  );
};

export default Forum;
