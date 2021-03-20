const express = require("express");

const Router = express.Router();

const db = require("../connection");

Router.get("/", (req, res) => {
  db.query("SELECT * FROM rooms", (err, rows, fields) => {
    if (!err) {
      res.status(200).send(rows);
    } else {
      throw err;
    }
  });
});

Router.get("/bookedRooms/:username", (req, res) => {
  const userName = req.params.username;
  db.query(
    `SELECT * FROM booking where name="${userName}"`,
    (err, rows, fields) => {
      if (!err) {
        res.status(200).send(rows);
      } else {
        throw err;
      }
    }
  );
});

Router.post("/bookRoom", (req, res) => {
  const roomDetails = req.body;
  const query = `INSERT INTO booking (room_number,name,email,phone_number,event,event_date,duration) values("${roomDetails.room}","${roomDetails.name}","${roomDetails.email}","${roomDetails.phoneNumber}","${roomDetails.event}","${roomDetails.date}","${roomDetails.duration}")`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send();
    } else {
      throw err;
    }
  });
});

Router.delete("/deleteRoom/:bookingId", (req, res) => {
  const id = req.params.bookingId;
  const query = `DELETE FROM booking WHERE booking_id=${id}`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send();
    } else {
      throw err;
    }
  });
});

module.exports = Router;
