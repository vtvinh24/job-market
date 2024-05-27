import React from "react";
import useNewsContent from "../hooks/useNewsContent.js";
import "../assets/css/Forum.css";
import { getMoment } from "../functions/Converter";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListNews = () => {
  const {news, loading, error } = useNewsContent();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {news.map((newcontent) => (
        <Card className="post-card" key={newcontent.id}>
          <Link
            to={`/posts/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          ></Link>
            <Card.Body>
              <Card.Title as="h2" style={{ color: "blue" }}>
                {newcontent.title}
              </Card.Title>
              <Card.Text className="post-card-content">
                {newcontent.content}
              </Card.Text>
              <Card.Link
                href={`/users/${newcontent.author}`}
                className="post-author"
                data-toggle="tooltip"
                title={`Author: ${newcontent.author}`}
                onClick={(e) => e.stopPropagation()}
              >
                {newcontent.author}
              </Card.Link>
              <Card.Text
                className="post-card-content"
                style={{ textAlign: "right", fontSize: "small" }}
              >
                {getMoment(newcontent.created_timestamp)}
              </Card.Text>
            </Card.Body>
       
        </Card>
      ))}
    </div>
  );
};

export default ListPost;
