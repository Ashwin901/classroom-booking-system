const express = require('express');

const Router = express.Router();

const db = require('../connection');

Router.get('/', (req, res) => {
    db.query("SELECT * FROM rooms", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            throw err;
        }
    })
})


module.exports = Router;