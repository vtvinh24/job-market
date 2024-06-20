import { useLoginQuery } from "./../../hooks/useLoginQuery";
import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, data, error, isLoading } = useLoginQuery();

  //  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Username:</label>
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" disabled={isLoading}>Login</button>
    //   </form>
    //   {isLoading && <p>Loading...</p>}
    //   {error && <p style={{color: 'red'}}>{error.message}</p>}
    //   {data && <p>Welcome, {data.username}!</p>}
    // </div>
    <Container
      className="d-flex justify-content-center mt-5"
      style={{ height: "100%" }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="formUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Link to={"/reset-password"}>Forget password</Link>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
