import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const API_URL = "http://localhost:8000/api";

const usePostUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const insertPost = async (title, content, user_id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/posts/update`, {
        title,
        content,
        user_id,
        post_id,
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      navigate("/error", {
        state: {
          message: error.response
            ? error.response.data.message
            : "An error occurred",
        },
      });
      setError(errormessage || "Error occurred");
      setLoading(false);
    }
  };

  return { insertPost, loading, error };
};

export default usePostUpdate;
