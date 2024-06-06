import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8000/api";

const useCountUser = () => {
  const [count, setCount] = useState(0); // Assuming count is a number
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const url = `${API_URL}/userCount`;
        const response = await axios.get(url);
        setCount(response.data.userCount); // Adjust according to your response structure
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return { count, loading, error };
};

export default useCountUser;
