import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "./Auth/firebase";
import "../App.css";

const HomePage = () => {
  let history = useHistory();

  // If a user is logged in we redirect him to the dashboard page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard");
      }
    });
  });

  const handleClick = (e) => {
    if (e.target.value === "register") {
      history.push("/register");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="home-section">
      <i className="fa fa-graduation-cap fa-5x"></i>
      <h2>Classroom Booking system</h2>
      <div>
        <Button value="register" onClick={handleClick} variant="dark">
          Register
        </Button>
        <Button value="login" onClick={handleClick} variant="light">
          Login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
