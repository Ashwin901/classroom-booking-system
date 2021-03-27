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
        <i className="fa fa-graduation-cap fa-5x grad-icon"></i>
        <Button
          style={{ margin: "0.5rem", backgroundColor:"#23153c", border:"none",outline:"none" }}
          variant="dark"
          onClick={() => history.push("/bookRoom")}
        >
          Book a room
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
