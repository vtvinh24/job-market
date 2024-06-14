// src/components/ResetPassword.js
import React, { useState } from "react";
import { Form, Button, Container, Alert, CardBody } from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  const handleResetPassword = async (event) => {
    event.preventDefault();
    const url =
      page === 1 ? "/api/auth/valid-username" : "/api/auth/reset-password";
    try {
      if (page === 2 && newPassword !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
      const response = await axios.post(url, {
        username,
        newPassword,
      });
      setError(null);
      if (response.status === 200) {
        if (page === 1) {
          setPage(2);
          return;
        } else {
          setMessage(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          return;
        }
      } else {
        setMessage(response.data.message);
      }
    } catch (err) {
      navigate("/error", {
        state: { message: error.response.data.message },
      });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <Card>
        <Card.Header>
          <h3>Reset Password</h3>
        </Card.Header>
        <Card.Body>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleResetPassword}>
            {page === 1 ? (
              <Form.Group controlId="formUsername">
                <Form.Label>Username address</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            ) : (
              <>
                <Form.Group controlId="formNewPassword" className="mb-2">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
            <div className="d-flex justify-content-between mt-3">
              {page === 2 ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => setPage(1)}
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                variant="primary"
                type="submit"
                onClick={handleResetPassword}
              >
                {page === 1 ? "Submit" : "Reset Password"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResetPassword;
