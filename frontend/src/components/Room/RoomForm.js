import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { bookRoom, getRoomNumbers, updateRoom } from "../services";
import { auth } from "../Auth/firebase";
import "../../App.css";

const RoomForm = ({ roomData, update, handleClose }) => {
  const [event, setEvent] = useState(update ? roomData.event : "");
  const [room, setRoom] = useState(update ? roomData.roomNumber : "");
  const [date, setDate] = useState(update ? roomData.event_date : "");
  const [startTime, setStartTime] = useState(update ? roomData.start_time : "");
  
  const [phoneNumber, setPhoneNumber] = useState(
    update ? roomData.phoneNumber : ""
  );
  const [duration, setDuration] = useState(
    update ? roomData.duration.toString() : ""
  );
  const [availableRooms, setAvailableRooms] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getRoomNumbers();
      setAvailableRooms(data);
    }

    getData();
  }, []);

  const findId = (currentRoom) => {
    if (currentRoom.roomNumber === room) {
      return currentRoom;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(
        phoneNumber.length > 0 &&
        event.length > 0 &&
        room.length > 0 &&
        date.length > 0 &&
        duration.length > 0 &&
        startTime.length > 0
      )
    ) {
      alert("Please will all the details");
    } else {
      const d = availableRooms.find(findId);
      const user = await auth.currentUser;
      const name = user.displayName;
      const email = user.email;
      const roomDetails = {
        name,
        email,
        event,
        room_id: d ? d.room_id : roomData.room_id,
        previous_rid: roomData ? roomData.room_id : 0,
        room,
        date,
        phoneNumber,
        duration,
        startTime,
      };
      if (update) {
        //Update data in the database here
        const data = await updateRoom(roomDetails);
        console.log(data);
        alert("Room successfully updated");
      } else {
        //Add data to the db here
        await bookRoom(roomDetails);
        console.log(roomDetails);
        alert("Room successfully booked");
      }

      handleClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            value={phoneNumber}
            type="tel"
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEvent">
          <Form.Label>Event</Form.Label>
          <Form.Control
            onChange={(e) => setEvent(e.currentTarget.value)}
            name="event"
            type="text"
            placeholder="Enter the event"
            value={event}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Start time</Form.Label>
          <Form.Control
            onChange={(e) => setStartTime(e.currentTarget.value)}
            value={startTime}
            type="time"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridRoom">
          <Form.Label>Rooms</Form.Label>
          <Form.Control
            onChange={(e) => setRoom(e.currentTarget.value)}
            as="select"
            value={room}
          >
            {update ? (
              <option>{room}</option>
            ) : (
              <option hidden>Select a room</option>
            )}
            {availableRooms ? (
              availableRooms.map((currentRoom, i) => {
                return <option key={i}>{currentRoom.roomNumber}</option>;
              })
            ) : (
              <option></option>
            )}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            onChange={(e) => setDate(e.currentTarget.value)}
            value={date}
            type="date"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setDuration(e.currentTarget.value)}
            value={duration}
            placeholder="Enter the number of hours"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Button
          style={{ backgroundColor: "#23153c", marginRight: "1rem" }}
          className="auth-button"
          variant="dark"
          type="submit"
        >
          {update ? "Update" : "Submit"}
        </Button>
        <Button onClick={handleClose} variant="dark" type="button">
          Cancel
        </Button>
      </Form.Row>
    </Form>
  );
};

export default RoomForm;
