import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Auth/firebase";
import { Button, Navbar, Nav } from "react-bootstrap";

const Header = () => {
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
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">CBS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav className="nav-link" as={Link} to="/dashboard">
          Home
        </Nav>
        <Nav.Link href="#rooms">Available rooms</Nav.Link>
        <Nav.Link href="#events">Booked rooms</Nav.Link>
        <Nav className="nav-link" as={Link} to="/yourrooms">
          Your rooms
        </Nav>
      </Nav>
      <Button variant="dark" onClick={handleLogout}>
        Logout
      </Button>
    </Navbar>
  );
};

export default Header;
