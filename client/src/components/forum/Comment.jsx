import { getMoment } from "../../functions/Converter";
import avatar from "../../assets/img/default_avatar.webp";
import useCommentDetail from "../../hooks/forum/comments/useCommentDetail";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import NavigateButton from "../ui/buttons/NavigateButton";
// import useCommentDelete from "../../hooks/forum/comments/useCommentDelete.js";
import { AuthContext } from "../../context/AuthContext";
import Skeleton from "react-loading-skeleton";

const Comment = ({ id }) => {

  const navigate = useNavigate();
  console.log("id", id)
  const { comment, loading, error } = useCommentDetail(id);
  // const { deleteComment } = useCommentDelete();
  const {userId} = useContext(AuthContext);

//   const handleDeleteComment = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this comment? " + comment_id
//     );
//     if (confirmDelete) {
//       deleteComment(comment_id);
//       navigate("/forum");
//     }
//   };

  if(loading) return (
    <Container
      className="comment"
    >
      <div className="comment-title">
        <h1><Skeleton count={0.5}/> </h1>
      </div>
      <div className="d-flex gap-2">
        <div className="comment-author">
          <div>
            {/* <img className="avatar" src={avatar} alt="Default Avatar" /> */}
            <Skeleton circle={true} height={50} width={50}/>
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
        </div>
        <div className="comment-content flex-grow">
          <Skeleton height={30} count={2.4} highlightColor="blue"/>
        </div>
      </div>
    </Container>
  )


  return (
    <Container
      className="comment"
    >
      <div className="comment-title">
        <h1>{comment.comment_title} </h1>
        {comment.user_id == userId && (
          <>
            <NavigateButton
              path={`/forum/edit/${comment_id}`}
              text="Edit"
              variant="primary"
            />
            {/* <Button variant="danger" onClick={() => handleDeleteComment()}> */}
            <Button variant="danger">
              Delete
            </Button>
          </>
        )}
      </div>
      <div className="d-flex gap-2">
        <div className="comment-author">
          <div>
            <img className="avatar" src={avatar} alt="Default Avatar" />
          </div>
          <div>
            <Link to={`/users/${comment.username}`}>User: {comment.username}</Link>
          </div>
          <div>
            <p>{getMoment(comment.comment_updated_time)}</p>
          </div>
        </div>
        <div className="comment-content flex-grow">
          <p>{comment.comment_content}</p>
        </div>
      </div>
    </Container>
  );
};

export default Comment;