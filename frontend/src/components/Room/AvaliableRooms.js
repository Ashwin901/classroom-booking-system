import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../../App.css";
import { getAvailableRooms } from "../services";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function getData() {
      const data = await getAvailableRooms();
      setRooms(data);
    }

    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="available_rooms_div">
        <h2 style={{ marginTop: "1rem" }}>Available Rooms</h2>
        <hr style={{ marginBottom: "1rem" }} />
        <div className="available_sub_div">
          {rooms ? (
            rooms.map((room, i) => {
              return (
                <Card data-aos="fade-left" key={i} style={{ margin: "1rem", color: "white", backgroundColor:"#23153c" }}>
                  <Card.Header>Available</Card.Header>
                  <Card.Body>
                    <Card.Title>Room: {room.roomNumber}</Card.Title>
                    <Card.Text>Department: {room.dept_name}</Card.Text>
                    <Card.Text>
                      This room is available for students and clubs to conduct
                      and participate in activities.
                      <br />
                      All the details must be provided before booking a room.
                      <br />
                      If any misconduct is observed strict action will be taken.
                    </Card.Text>
                    <Button
                      onClick={() => history.push("/bookRoom")}
                      variant="dark"
                      className="auth-button"
                      style={{border:"none",outline:"none"}}
                    >
                      Book room
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <p>No available rooms</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableRooms;
