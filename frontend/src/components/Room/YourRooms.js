import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import RoomCard from "./RoomCard";
import { getRooms } from "../services";
import { auth } from "../Auth/firebase";
import "../../App.css";

const YourRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function getData() {
      const user = await auth.currentUser;
      const rooms = await getRooms(user ? user.displayName : "");
      setRooms(rooms);
    }
    getData();
  }, [rooms]);

  const handleRoomDelete = (deleteRoom) => {
    if (window.confirm("Are you sure you want to cancel the room?")) {
      const updateRooms = rooms.filter((room) => room !== deleteRoom);
      setRooms(updateRooms);
    }
  };

  return (
    <>
      <Header />
      <div className="your-room-section">
        <h2>Your Rooms</h2>
        <Row>
          {rooms ? (
            rooms.map((room, i) => {
              return (
                <RoomCard key={i} room={room} handleDelete={handleRoomDelete} />
              );
            })
          ) : (
            <p>No rooms booked</p>
          )}
        </Row>
      </div>
    </>
  );
};

export default YourRooms;
