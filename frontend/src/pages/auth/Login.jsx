import React from "react";
import "./../../assets/css/LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import useLoginQuery from "../../hooks/useLoginQuery"; // assuming you have an API file

const Login = () => {
  const handleClick = useLoginQuery(); // assuming useLoginQuery is a custom hook for login

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginSuccessful = handleClick; // assuming handleClick returns a boolean indicating login success

    if (loginSuccessful) {
      // redirect to /home
      window.location.href = "/home";
    } else {
      // show login error
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="boxx">
      <div className="form-box login">
        <form onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
