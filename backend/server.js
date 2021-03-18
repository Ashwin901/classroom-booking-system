const express = require("express");

const cors = require("cors");
require("dotenv").config();

const mysqlConnection = require('./connection');

const RoomRouter = require("./routes/rooms");

const rooms = require("./data/RoomData");

const app = express();

app.use(cors());





app.use("/api/rooms", RoomRouter);

app.get("/", (req, res) => {
  res.send("api running!");
});

const PORT = 5000 || process.env.PORT;
app.listen(
  PORT,
  console.log(`App running on port ${PORT}`)
);
