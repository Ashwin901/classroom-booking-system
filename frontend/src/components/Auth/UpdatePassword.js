import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import firebase from "firebase";
import Header from "../Room/Header";

const UpdatePassword = () => {
  let history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // reauthenticate the user
  const reauthenticate = async () => {
    try {
      const user = auth.currentUser;
      const cred = firebase.auth.EmailAuthProvider.credential(
        user.email,
        oldPassword
      );
      return await user.reauthenticateWithCredential(cred);
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  // change password function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldPassword.length > 0 && newPassword.length > 0) {
      setLoading(true);
      reauthenticate().then(async (user) => {
        if (user) {
          try {
            const currentUser = auth.currentUser;
            await currentUser.updatePassword(newPassword);
            alert("Password changed successfully");
            setLoading(false);
            history.push("/profile");
          } catch (e) {
            console.log(e);
            alert(e.message);
            setLoading(false);
          }
        }
        setLoading(false);
      });
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <>
      <Header />
      <div className="update-pwd-section">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <h2>Change Password</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicPassword1">
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  value={oldPassword}
                  type="password"
                  placeholder="Old password"
                  onChange={(e) => setOldPassword(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword2">
                <Form.Label>New password</Form.Label>
                <Form.Control
                  value={newPassword}
                  type="password"
                  placeholder="New password"
                  onChange={(e) => setNewPassword(e.currentTarget.value)}
                />
              </Form.Group>

              <Button
                variant="dark"
                className="auth-button"
                style={{ backgroundColor: "#23153c" }}
                type="submit"
              >
                change password
              </Button>
            </Form>
          </>
        )}
      </div>
    </>
  );
};

export default UpdatePassword;
