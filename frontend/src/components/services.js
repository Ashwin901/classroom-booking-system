import axios from "axios";
import {auth} from "./Auth/firebase";

const url = "http://localhost:5000";

const getRooms = async (email) => {
  try {
    console.log(email);
    const data = await axios.get(`${url}/api/rooms`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

const bookRoom = async (roomDetails) => {
  try {
    // const data = await axios.post(`${url}/api/bookRoom`);
    console.log(roomDetails);
  } catch (e) {
    console.log(e);
  }
};

const updateRoom = async (roomDetails) => {
  try {
    // const data = await axios.post(`${url}/api/updateRoom`);
    console.log(roomDetails);
  } catch (e) {
    console.log(e);
  }
};

export { getRooms, bookRoom, updateRoom};
