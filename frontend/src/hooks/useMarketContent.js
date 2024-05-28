import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8000/api";

const usePostsQuery = () => {
  const [content, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = `${API_URL}/marketing`;
        const response = await axios.get(url);
        setContents(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};

export default usePostsQuery;
