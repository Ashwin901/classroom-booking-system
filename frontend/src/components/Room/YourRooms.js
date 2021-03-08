import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import RoomCard from "./RoomCard";
import { getRooms } from "../../services";
import "../../App.css";

const YourRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function getData() {
      const rooms = await getRooms();
      setRooms(rooms);
    }
  });

  return (
    <>
      <Header />
      <div className="your-room-section">
        <h2>Your Rooms</h2>
        <Row>
          {rooms.map((room, i) => {
            return <RoomCard key={i} room={room} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default YourRooms;
