import React from "react";
import RoomForm from "./RoomForm";
import Header from "./Header";
import { useHistory } from "react-router-dom";

const BookRoom = () => {
  let history = useHistory();

  const handleClose = () => {
    history.goBack();
  };

  return (
    <div style={{height:"100vh"}}>
      <Header />
      <div className="bookRoom-section">
        <h2>Book a room</h2>
        <hr style={{ marginBottom: "1rem" }} />
        <RoomForm handleClose={handleClose} update={false}></RoomForm>
      </div>
    </div>
  );
};

export default BookRoom;
