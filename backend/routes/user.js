const express = require("express");
const UserRouter = express.Router();

const db = require("../connection");

UserRouter.get("/:name", (req, res) => {
  const userName = req.params.name;
  const query = `INSERT INTO USERS (user_name) VALUES("${userName}");`;
  db.query(query, (err, rows, fields) => {
    if (!err) {
      res.status(200).send();
    } else {
      throw err;
    }
  });
});

module.exports = UserRouter;
