import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8000/api";

const useNewsContent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnews = async () => {
      try {
        const url = `${API_URL}/datapost`;
        const response = await axios.get(url);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchnews();
  }, []);

  return {news, loading, error };
};

export default useNewsContent;
