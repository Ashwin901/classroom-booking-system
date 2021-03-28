const mysql = require("mysql");
const { USER, PASSWORD, DATABASE } = require("./config");

const database = mysql.createConnection({
  host: "localhost",
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");

    let createRooms = `create table if not exists rooms(room_id int, roomNumber varchar(8), dept_name varchar(8), primary key (room_id));`;
    let createBooking = `create table if not exists booking(room_id int, roomNumber varchar(8), name varchar(15), email varchar(30),phoneNumber varchar(18), event varchar(15), start_time Time(5), duration varchar(2), event_date varchar(12), foreign key (room_id) references rooms(room_id));`;
    let createUsers = `create table if not exists users(user_id int not null auto_increment, user_name varchar(15), primary key (user_id));`;

    database.query(createRooms, (err, rows, fields) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
    });

    database.query(createBooking, (err, rows, fields) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
    });

    database.query(createUsers, (err, rows, fields) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
    });
  }
});

module.exports = database;
