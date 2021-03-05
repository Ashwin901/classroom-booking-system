import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { auth } from "../Auth/firebase";
import BookRoom from "./BookRoom";

const Dashboard = () => {
  let history = useHistory();
  const [bookRoom, setBookRoom] = useState(false);

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
    <div className="dashboard-section">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">CBS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#rooms">Available rooms</Nav.Link>
          <Nav.Link href="#events">Booked rooms</Nav.Link>
        </Nav>
        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </Navbar>
      {bookRoom ? (
        <BookRoom handleClose={() => setBookRoom(false)} />
      ) : (
        <div className="dashboard-sub-section">
          <i className="fa fa-graduation-cap fa-5x"></i>
          <Button style={{margin:"0.5rem"}} variant="light" onClick={() => setBookRoom(true)}>
            Book a room
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
