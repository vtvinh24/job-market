import usePostsQuery from "../../hooks/forum/posts/usePostsQuery";
import "../../assets/css/Forum.css";
import { getMoment } from "../../functions/Converter";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import PostCard from "./PostCard";

// ...



const ListPost = () => {
  const navigate = useNavigate();
  const { posts, loading, error } = usePostsQuery();

  if (loading) {
    return <>
      <Skeleton height={50} count={0.2} className="mt-2"/>
      <Skeleton height={160} className="mt-2"/>
      <Skeleton height={160} className="mt-2"/>
      <Skeleton height={160} className="mt-2"/>
      <Skeleton height={160} className="mt-2"/>
      <Skeleton height={160} className="mt-2"/>
    </>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Recent Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.post_id} post={post} onClick={() => navigate(`/posts/${post.post_id}`)}/>
      ))}
    </div>
  );
};

export default ListPost;