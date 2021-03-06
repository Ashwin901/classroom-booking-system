import React from "react";
import { Card, Button } from "react-bootstrap";

const RoomCard = ({ room }) => {
  const handleUpdate = () => {
    //Add update room logic here
    alert("update room");
  };

  const handleDelete = () => {
    //Add delete room logic here
    alert("cancel room");
  };

  return (
    <Card className="room-card">
      <Card.Header>Room details</Card.Header>
      <hr />
      <Card.Body>
        <Card.Title className="title">
          Room number: {room.roomNumber}
        </Card.Title>
        <Card.Text>
          Name: {room.name}
          <br />
          Email: {room.email} <br />
          Phone number: {room.phone}
          <br />
          Event: {room.event}
          <br />
          Date: {room.date} <br />
          Duration: {room.duration} <br />
        </Card.Text>
        <Button
          onClick={handleUpdate}
          style={{ marginRight: "0.5rem" }}
          size="sm"
          variant="dark"
        >
          Update
        </Button>
        <Button onClick={handleDelete} size="sm" variant="danger">
          Cancel
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
