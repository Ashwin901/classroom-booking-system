import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { bookRoom, getRoomNumbers, updateRoom } from "../services";
import { auth } from "../Auth/firebase";
import "../../App.css";

const RoomForm = ({ roomData, update, handleClose }) => {
  const [event, setEvent] = useState(update ? roomData.event : "");
  const [room, setRoom] = useState(update ? roomData.roomNumber : "");
  const [date, setDate] = useState(update ? roomData.event_date : "");
  const [phoneNumber, setPhoneNumber] = useState(
    update ? roomData.phoneNumber : ""
  );
  const [duration, setDuration] = useState(
    update ? roomData.duration.toString() : ""
  );
  const [availableRooms, setAvailableRooms] = useState([]);
  const [room_id, setRId] = useState(0);

  useEffect(() => {
    async function getData() {
      const data = await getRoomNumbers();
      setAvailableRooms(data);
    }

    getData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(
        phoneNumber.length > 0 &&
        event.length > 0 &&
        room.length > 0 &&
        date.length > 0 &&
        duration.length > 0
      )
    ) {
      alert("Please will all the details");
    } else {
      const user = await auth.currentUser;
      const name = user.displayName;
      const email = user.email;
      const roomDetails = {
        name,
        email,
        event,
        room_id,
        room,
        date,
        phoneNumber,
        duration,
      };
      if (update) {
        //Update data in the database here
        await updateRoom(roomDetails);
        alert("Room successfully updated");
        console.log("update");
      } else {
        //Add data to the db here
        await bookRoom(roomDetails);
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
      </Form.Row>
      <Form.Row>
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

        <Form.Group as={Col} controlId="formGridRoom">
          <Form.Label>Rooms</Form.Label>
          <Form.Control
            onChange={(e) => {
              const data = JSON.parse(e.currentTarget.value);
              setRId(data.room_id);
              setRoom(data.roomNumber);
            }}
            as="select"
            value={room}
          >
            {update ? (
              <option selected="true">{room}</option>
            ) : (
              <>
                <option hidden>Select a room</option>
                {availableRooms ? (
                  availableRooms.map((room, i) => {
                    return (
                      <option key={i} value={JSON.stringify(room)}>
                        {room.roomNumber}
                      </option>
                    );
                  })
                ) : (
                  <p></p>
                )}
              </>
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
        <Button style={{ marginRight: "1rem" }} variant="primary" type="submit">
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
