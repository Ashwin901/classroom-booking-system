const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const rooms = require("./data/RoomData");

const app = express();
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

app.get("/api/rooms", (req, res) => {
  res.json(rooms);
});

app.get("/api/rooms/:id", (req, res) => {
  const room = rooms.find((r) => r.id === req.params.id);
  res.json(room);
});

app.get("/", (req, res) => {
  res.send("api running!");
});

app.listen(
  process.env.PORT,
  console.log(`App running on port ${process.env.PORT}`)
);
