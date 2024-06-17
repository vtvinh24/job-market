import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const useLoginQuery = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { username, password }
      );
      setData(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Login successful");
      navigate("/ticket");
    } catch (err) {
      navigate("/error", {
        state: {
          message: error.response
            ? error.response.data.message
            : "An error occurred",
        },
      });
      if (error) {
        setError(error.data);
      } else {
        setError({ message: "An error occurred" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, data, error, isLoading };
};
