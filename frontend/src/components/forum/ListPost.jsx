import usePostsQuery from "../../hooks/usePostsQuery";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ...

const ListPost = () => {
  const navigate = useNavigate();
  const { posts, loading, error } = usePostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Card
          className="post-card"
          key={post.post_id}
          onClick={() => navigate(`/posts/${post.post_id}`)}
        >
          <Card.Body>
            <Card.Title as="h2" style={{ color: "blue" }}>
              {post.post_title}
            </Card.Title>
            <Card.Text className="post-card-content">
              {post.post_content}
            </Card.Text>
            <Link
              to={`/users/${post.username}`}
              className="card-author"
              data-toggle="tooltip"
              title={`Author: ${post.username}`}
              onClick={(e) => e.stopPropagation()}
            >
              {post.username}
            </Link>
            <Card.Text
              
              style={{ textAlign: "right", fontSize: "small"}}
            >
              {getMoment(post.post_created_date)}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListPost;
