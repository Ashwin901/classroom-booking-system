import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "./Auth/firebase";
import "../App.css";
import NET from "vanta/dist/vanta.net.min";

const HomePage = () => {
  let history = useHistory();
  const [vantaEffect, setVantaEffect] = useState(0);
  let homeRef = useRef(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard");
      }
    });

    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: homeRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, history]);

  const handleClick = (e) => {
    if (e.target.value === "register") {
      history.push("/register");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="home-section" ref={homeRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        {/* <i className="fa fa-graduation-cap fa-5x"></i> */}
        <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Classroom Booking system
        </h2>
        <div>
          <Button
            className="auth-button"
            value="register"
            onClick={handleClick}
            variant="dark"
          >
            Register
          </Button>
          <Button style={{color:'#ff3f81'}} value="login" onClick={handleClick} variant="light">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
