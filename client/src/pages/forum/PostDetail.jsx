import { useParams } from "react-router-dom";
import "../../assets/css/Forum.css";
import NavigateButton from "../../components/ui/buttons/NavigateButton.jsx";
import Post from "../../components/forum/Post.jsx";
import Comment from "../../components/forum/Comment.jsx";
import useCommentsQuery from "../../hooks/forum/comments/useCommentsQuery.js";
import { Container } from "react-bootstrap";

const PostDetail = () => {
  const { id } = useParams();
  const post_id = id;
  const { comments, loading, error } = useCommentsQuery(id);

  return (
    <div className="forum-body">
      <NavigateButton path="/forum" text="Back to Forum" variant="primary" />
      <Post post_id={id} />
      <Container className="mt-3 border">
        #Comments list
        {comments.map((comment) => (
          
          <Container className="mt-3 border" key={comment.comment_id}>
            #Comment
            <h2>{comment.username}</h2>
            <p>{comment.comment_content}</p>
          </Container>
        ))}
      </Container>
    </div>
  );
};

export default PostDetail;
