import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Auth/firebase";
import { Navbar, Nav } from "react-bootstrap";

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

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/dashboard">
        CBS
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav className="nav-link" as={Link} to="/availableRooms">
          Available Rooms
        </Nav>
        <Nav className="nav-link" as={Link} to="/bookedRooms">
          Booked Rooms
        </Nav>
        <Nav className="nav-link" as={Link} to="/yourrooms">
          Your rooms
        </Nav>
      </Nav>

      <Link to="/profile">
        <i style={{ color: "black" }} className="fa fa-user fa-2x"></i>
      </Link>
    </Navbar>
  );
};

export default Header;
