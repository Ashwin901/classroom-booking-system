import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const BookRoom = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        name.length > 0 &&
        phoneNumber.length > 0 &&
        email.length > 0 &&
        event.length > 0 &&
        room.length > 0 &&
        date.length > 0 &&
        duration.length > 0
      )
    ) {
      alert("Please will all the details");
    } else {
      console.log(name, " ", email, " ", date, " ", event, " ", room);

      //Add data to the database here

      handleClose();
    }
  };

  return (
    <div className="dashboard-sub-section">
      <h2>Book a room</h2>
      <hr style={{ marginBottom: "1rem" }} />
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Enter email"
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
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRoom">
            <Form.Label>Rooms</Form.Label>
            <Form.Control
              onChange={(e) => setRoom(e.currentTarget.value)}
              as="select"
              value={room}
            >
              <option hidden>Select a room</option>
              <option>A101</option>
              <option>A102</option>
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
            style={{ marginRight: "1rem" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button onClick={handleClose} variant="dark" type="button">
            Cancel
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default BookRoom;
