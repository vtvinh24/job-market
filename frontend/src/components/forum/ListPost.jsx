import usePostsQuery from "../../hooks/usePostsQuery";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListPost = () => {
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
        <Card className='post-card' key={post.id}>
          <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Body>
              <Card.Title as='h2' style={{ color: 'blue' }}>{post.title}</Card.Title>
              <Card.Text className="post-card-content">{post.content}</Card.Text>
              <Card.Link
                href={`/users/${post.author}`}
                className="post-author"
                data-toggle="tooltip"
                title={`Author: ${post.author}`}
                onClick={(e) => e.stopPropagation()}
              >
                {post.author}
              </Card.Link>
              <Card.Text className="post-card-content" style={{ textAlign: 'right', fontSize: 'small' }}>{getMoment(post.created_timestamp)}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ListPost;