import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMoment } from "../../functions/Converter";

const PostCard = ({ post, onClick }) => {
  return (
    <Card className="post-card" key={post.post_id} onClick={onClick}>
      <Card.Body>
        <Card.Title as="h2" className="post-card-title">
          {post.post_title}
          <Card.Text
            className="ms-2"
            style={{ textAlign: "right", float: "right", fontSize: "small" }}
          >
            {post.views}123 <span>👁</span> {/* UPDATE */}
          </Card.Text>
          <Card.Text
            style={{ textAlign: "right", float: "right", fontSize: "small" }}
          >
            {post.views}10 <span>💬</span> {/* UPDATE */}
          </Card.Text>
        </Card.Title>
        <Card.Text className="post-card-content">{post.post_content}</Card.Text>
        
        <Link
          to={`/users/${post.username}`}
          className="card-author"
          data-toggle="tooltip"
          title={`Author: ${post.username}`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            width={20}
            height={20}
            className="me-2"
          />
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
