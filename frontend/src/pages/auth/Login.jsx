import React, { useState } from 'react';
import { useLoginQuery } from './../../hooks/useLoginQuery';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, data, error, isLoading } = useLoginQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" disabled={isLoading}>Login</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error.message}</p>}
      {data && <p>Welcome, {data.username}!</p>}
    </div>
  );
};

export default Login;
