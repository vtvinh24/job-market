import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const API_URL = "http://localhost:8000/api";

const useBalanceQuery = (user_id) => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const url = `${API_URL}/payment/balance`;
        const response = await axios.get(url, { params: { user_id } });
        setBalance(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBalance();
  }, []);
  return { balance, loading, error };
};

export default useBalanceQuery;
