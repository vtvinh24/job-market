import { useState } from 'react';
import axios from 'axios';

export const useLoginQuery = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { username, password });
      setData(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError({ message: 'An error occurred' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, data, error, isLoading };
};