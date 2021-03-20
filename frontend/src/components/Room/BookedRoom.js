import React,{useState, useEffect} from "react";
import Header from "./Header";
import {Row} from "react-bootstrap";
import RoomCard from "./RoomCard";
import {getBookedRooms} from "../services";

const BookedRooms = () => {
    const [rooms, setRooms] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const data = await getBookedRooms();
      setRooms(data);
    }
    getData();
  }, []);



  return (
    <>
      <Header />
      <div className="your-room-section">
        <h2>Your Rooms</h2>
        <Row>
          {rooms ? (
            rooms.map((room, i) => {
              return (
                <RoomCard key={i} room={room} book={true}/>
              );
            })
          ) : (
            <p>No rooms booked</p>
          )}
        </Row>
      </div>
    </>
  );
}

export default BookedRooms;