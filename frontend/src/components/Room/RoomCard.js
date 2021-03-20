import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const RoomCard = ({ room, handleDelete,book}) => {
  let history = useHistory();
  const date = new Date(room.event_date);
  const handleUpdate = () => {
    //Add update room logic here
    history.push({ pathname: "/updateRoom", state: room });
  };

  return (
    <Card className="room-card">
      <Card.Header>Room details</Card.Header>
      <hr />
      <Card.Body>
        <Card.Title className="title">
          Room number: {room.room_number}
        </Card.Title>
        <Card.Text>
          Name: {room.name}
          <br />
          Email: {room.email} <br />
          Phone number: {room.phone_number}
          <br />
          Event: {room.event}
          <br />
          Date: {date.toLocaleDateString()} <br />
          Duration: {room.duration} <br />
        </Card.Text>
        {book ? "" : <Button
          onClick={handleUpdate}
          style={{ marginRight: "0.5rem" }}
          size="sm"
          variant="dark"
        >
          Update
        </Button>}

        {book ? "" : <Button
          onClick={() => handleDelete ? handleDelete(room.booking_id) : console.log("wait")}
          size="sm"
          variant="danger"
        >
          Cancel
        </Button>}
        
        
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
