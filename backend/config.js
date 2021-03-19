require("dotenv").config();


const PORT = process.env.PORT || 5000;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE || 'cbs';

module.exports = {
    PORT,
    USER,
    PASSWORD,
    DATABASE
}