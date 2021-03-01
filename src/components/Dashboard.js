import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { auth } from "./Auth/firebase";

const Dashboard = () => {
  let history = useHistory();

  // We check that if a user is not logged in we redirect it to the home page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      } else {
        console.log(user.email);
      }
    });
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="dashboard-section">
      <h2>Dashboard</h2>
      <Button variant="dark" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
