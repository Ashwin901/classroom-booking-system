const express = require("express");

const Router = express.Router();

const db = require("../connection");

Router.get("/bookedRooms", (req, res) => {
  db.query("SELECT * FROM booking", (err, rows, fields) => {
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
  const query = `INSERT INTO booking (room_id,roomNumber,name,email,phoneNumber,event,start_time,duration,event_date) values("${roomDetails.room_id}","${roomDetails.room}","${roomDetails.name}","${roomDetails.email}","${roomDetails.phoneNumber}","${roomDetails.event}","","${roomDetails.duration}","${roomDetails.date}")`;
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
  const query = `DELETE FROM booking WHERE room_id=${id}`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send();
    } else {
      throw err;
    }
  });
});

Router.get("/availableRooms", (req, res) => {
  const query = `SELECT * FROM rooms WHERE room_id NOT IN (SELECT room_id from booking)`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send(rows);
    } else {
      throw err;
    }
  });
});

Router.get("/roomNumbers", (req, res) => {
  const query = `SELECT roomNumber,room_id FROM rooms WHERE room_id NOT IN (SELECT room_id from booking)`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send(rows);
    } else {
      throw err;
    }
  });
});

module.exports = Router;
