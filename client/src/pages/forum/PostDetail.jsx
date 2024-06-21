import { useParams } from "react-router-dom";
import Post from "../../components/forum/Post.jsx";
import NavigateButton from "../../components/buttons/NavigateButton.jsx";

const PostDetail = () => {
  const { id } = useParams();
  const post_id = Number(id);

  return (
    <div className="forum-body">
      <NavigateButton path="/forum" text="Back to Forum" variant="primary" />
      <Post post_id={post_id} />
    </div>
  );
};

export default PostDetail;
