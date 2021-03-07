import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BookRoom from "./BookRoom";
import Header from "./Header";


const Dashboard = () => {
  const [bookRoom, setBookRoom] = useState(false);

  return (
    <div className="dashboard-section">
      <Header />
      {bookRoom ? (
        <BookRoom handleClose={() => setBookRoom(false)} />
      ) : (
        <div className="dashboard-sub-section">
          <i className="fa fa-graduation-cap fa-5x"></i>
          <Button
            style={{ margin: "0.5rem" }}
            variant="light"
            onClick={() => setBookRoom(true)}
          >
            Book a room
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
