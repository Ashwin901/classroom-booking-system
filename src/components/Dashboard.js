import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { auth } from "./Auth/firebase";

const Dashboard = () => {
  let history = useHistory();

  // We check that if a user is not logged in we redirect it to the home page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      try {
        await auth.signOut();
        history.push("/");
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">CRBS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#rooms">Available rooms</Nav.Link>
          <Nav.Link href="#events">Booked rooms</Nav.Link>
        </Nav>
        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </Navbar>
      <div className="dashboard-section">
        <h2>Dashboard</h2>
        <Button variant="light">Book a room</Button>
      </div>
    </>
  );
};

export default Dashboard;
