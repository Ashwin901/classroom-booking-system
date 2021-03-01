import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  let history = useHistory();

  const handleSubmit = () => {
    history.push("/dashboard");
  };

  return (
    <div className="auth-section">
      <h2>Login</h2>
      <hr/>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
