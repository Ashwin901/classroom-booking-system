import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  let history = useHistory();

  const handleClick = (e) => {
    if (e.target.value === "register") {
      history.push("/register");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="home-section">
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
