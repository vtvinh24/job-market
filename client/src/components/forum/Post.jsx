import { getMoment } from "../../functions/Converter";
import avatar from "../../assets/img/default_avatar.webp";
import usePostDetail from "../../hooks/forum/posts/usePostDetail";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import NavigateButton from "../ui/buttons/NavigateButton";
import usePostDelete from "../../hooks/forum/posts/usePostDelete";
import { AuthContext } from "../../context/AuthContext";
import Skeleton from "react-loading-skeleton";

const Post = ({ post_id }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const { post, loading, error } = usePostDetail(post_id);
  const { deletePost } = usePostDelete();
  const { userId } = useContext(AuthContext);

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post? " + post_id
    );
    if (confirmDelete) {
      deletePost(post_id);
      navigate("/forum");
    }
  };

  if (loading)
    return (
      <Container className="post">
        <div className="post-title">
          <h1>
            <Skeleton count={0.5} />{" "}
          </h1>
        </div>
        <div className="d-flex gap-2">
          <div className="post-author">
            <div>
              {/* <img className="avatar" src={avatar} alt="Default Avatar" /> */}
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
          </div>
          <div className="post-content flex-grow">
            <Skeleton height={30} count={2.4} highlightColor="blue" />
          </div>
        </div>
      </Container>
    );

  return (
    <div className="post">
      <div className="post-title">
        <h1>{post.title} </h1>
        {post.id == userId && (
          <>
            <NavigateButton
              path={`/forum/edit/${post_id}`}
              text="Edit"
              variant="primary"
            />
            <Button variant="danger" onClick={() => handleDeletePost()}>
              Delete
            </Button>
          </>
        )}
      </div>
      <div className="d-flex gap-2">
        <div className="post-author">
          <div>
            <img className="avatar" src={avatar} alt="Default Avatar" />
          </div>
          <div>
            <Link to={`/users/${post.author}`}>{post.author}</Link>
          </div>
          <div>
            <p>{getMoment(post.updatedAt)}</p>
          </div>
        </div>
        <div className="post-content flex-grow">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
