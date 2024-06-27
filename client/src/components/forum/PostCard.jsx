import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMoment } from "../../functions/Converter";

const PostCard = ({ post, onClick }) => {
  return (
    <Card className="post-card" key={post.post_id} onClick={onClick}>
      <Card.Body>
        <Card.Title as="h2" style={{ color: "blue" }}>
          {post.post_title}
        </Card.Title>
        <Card.Text className="post-card-content">{post.post_content}</Card.Text>
        <Link
          to={`/users/${post.username}`}
          className="card-author"
          data-toggle="tooltip"
          title={`Author: ${post.username}`}
          onClick={(e) => e.stopPropagation()}
        >
          {post.username}
        </Link>
        <Card.Text style={{ textAlign: "right", fontSize: "small" }}>
          {getMoment(post.post_updated_time)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;