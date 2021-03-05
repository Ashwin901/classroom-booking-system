import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { auth } from "./firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const SignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setLoading(false);
      history.push("/dashboard");
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  return (
    <div className="auth-section">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h2>Register</h2>
          <hr />
          <Form onSubmit={SignUp}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Register;
