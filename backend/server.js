const express = require("express");

const rooms = require("./data/RoomData");

const app = express();
const PORT = 5000;


app.get('/api/rooms', (req, res) => {
    res.json(rooms);
})

app.get('/api/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === req.params.id);
    
    res.json(room);
})

app.get('/', (req, res) => {
    res.send("api running!");
})

app.listen(PORT, console.log(`App running on port ${PORT}`));