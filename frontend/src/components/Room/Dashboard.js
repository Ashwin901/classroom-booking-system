import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  let history = useHistory();

  return (
    <div className="dashboard-section">
      <Header />
      <div className="dashboard-sub-section">
        <i className="fa fa-graduation-cap fa-5x"></i>
        <Button
          style={{ margin: "0.5rem" }}
          variant="light"
          onClick={() => history.push("/bookRoom")}
        >
          Book a room
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
