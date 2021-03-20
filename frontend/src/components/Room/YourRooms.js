import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./Header";
import RoomCard from "./RoomCard";
import { getRooms, deleteRoom } from "../services";
import { auth } from "../Auth/firebase";
import "../../App.css";

const YourRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("User not logged in");
      }
    });
    async function getData() {
      const data = await getRooms(user ? user.displayName : "");
      setRooms(data);
    }
    getData();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to cancel the room?")) {
      await deleteRoom(id);
      const data = await getRooms(user ? user.displayName : "");
      setRooms(data);
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
                <RoomCard key={i} room={room} handleDelete={handleDelete} />
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
