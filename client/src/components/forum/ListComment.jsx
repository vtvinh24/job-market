import useCommentsQuery from "../../hooks/forum/comments/useCommentsQuery";
import { Pagination, Row } from "react-bootstrap";
import "../../assets/css/Forum.css";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PostCard from "./PostCard";
import { useState } from "react";

// ...

const ListComment = ({ post_id }) => {
  const navigate = useNavigate();
  const { comments, loading, error } = useCommentsQuery(post_id);

  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(4);
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return (
      <>
        <Skeleton height={50} count={0.2} className="mt-2" />
        <Skeleton height={160} className="mt-2" />
        <Skeleton height={160} className="mt-2" />
        <Skeleton height={160} className="mt-2" />
        <Skeleton height={160} className="mt-2" />
        <Skeleton height={160} className="mt-2" />
      </>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {currentComments.map((comment) => (
        <Card>
          <Row>ID: {comment.comment_id}</Row>
          <Row>Content: {comment.comment_content}</Row>
          <Row>Author: {comment.username}</Row>
        </Card>
      ))}
      <Pagination className="justify-content-center mt-4">
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => paginate(number)}
            active={number === currentPage}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default ListComment;
