import React from "react";
import RoomForm from "./RoomForm";

const BookRoom = ({ handleClose }) => {
  return (
    <div className="dashboard-sub-section">
      <h2>Book a room</h2>
      <hr style={{ marginBottom: "1rem" }} />
      <RoomForm handleClose={handleClose} update={false}></RoomForm>
    </div>
  );
};

export default BookRoom;
