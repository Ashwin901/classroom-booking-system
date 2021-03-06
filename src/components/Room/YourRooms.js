import React from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import RoomCard from "./RoomCard";
import "../../App.css";

const YourRooms = () => {
  const rooms = [
    {
      roomNumber: "A101",
      name: "Ash",
      email: "ash@email.com",
      phone: "12345678",
      event: "Git and Github",
      date: "21/03/2021",
      duration: "2hrs",
    },
    {
      roomNumber: "A102",
      name: "Ash",
      email: "ash@email.com",
      phone: "12345678",
      event: "Git and Github",
      date: "21/03/2021",
      duration: "2hrs",
    },
  ];

  return (
    <>
      <Header />
      <div className="your-room-section">
        <h2>Your Rooms</h2>
        <Row>
          {rooms.map((room) => {
            return <RoomCard room={room} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default YourRooms;
