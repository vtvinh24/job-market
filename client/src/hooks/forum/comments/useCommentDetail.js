import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const API_URL = "http://localhost:8000/api";

const useCommentDetail = (id) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const url = `${API_URL}/forum/comments/${id}`;
        const response = await axios.get(url);
        setComment(response.data);
        setLoading(false);
      } catch (error) {
        navigate("/error", {
          state: {
            message: error.response
              ? error.response.data.message
              : "An error occurred",
          },
        });
        setError(error);
        setLoading(false);
      }
    };
    fetchComment();
  }, []);
  return { comment, loading, error };
};

export default useCommentDetail;
