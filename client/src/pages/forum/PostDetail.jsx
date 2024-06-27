import { useParams } from "react-router-dom";
import "../../assets/css/Forum.css";
import NavigateButton from "../../components/ui/buttons/NavigateButton.jsx";
import Post from "../../components/forum/Post.jsx";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <div className="forum-body">
      <NavigateButton path="/forum" text="Back to Forum" variant="primary" />
      <Post post_id={id} />
    </div>
  );
};

export default PostDetail;