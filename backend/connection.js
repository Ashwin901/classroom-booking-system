const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "password",
  database: "cbs",
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

module.exports = database;
