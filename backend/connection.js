const mysql = require("mysql");
const {USER, PASSWORD, DATABASE} = require("./config"); 

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
  }
});

module.exports = database;
