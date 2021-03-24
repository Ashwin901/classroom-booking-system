import React from "react";
import { useHistory } from "react-router-dom";
import RoomForm from "./RoomForm";
import Header from "./Header";
import "../../App.css";

const UpdateRoom = () => {
  let history = useHistory();
  const roomData = history.location.state;

  return (
    <>
      <Header />
      <div className="update-section">
        <h2>Update room</h2>
        <hr style={{ marginBottom: "1rem" }} />
        <RoomForm
          handleClose={() => {
            history.goBack();
          }}
          roomData={roomData}
          update={true}
        ></RoomForm>
      </div>
    </>
  );
};

export default UpdateRoom;
