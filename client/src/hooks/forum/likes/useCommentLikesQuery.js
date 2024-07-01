import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8000/api";

const useCommentLikesQuery = (postId) => {
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const url = `${API_URL}/forum/likes/${postId}`;
        const response = await axios.get(url);
        setLikes(response.data);
        setLoading(false);
      } catch (error) {
        // navigate("/error", {
          // state: {
          //   message: error.response
          //     ? error.response.data.message
          //     : "An error occurred",
          // },
        // });
        setError(error);
        setLoading(false);
      }
    };

    fetchLikes();
  }, []);

  return { likes, loading, error };
};

export default useCommentLikesQuery;