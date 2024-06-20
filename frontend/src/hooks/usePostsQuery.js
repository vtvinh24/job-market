import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8000/api";

const usePostsQuery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `${API_URL}/posts`;
        const response = await axios.get(url);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePostsQuery;
