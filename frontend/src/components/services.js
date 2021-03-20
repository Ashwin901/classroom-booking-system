import axios from "axios";
const url = "http://localhost:5000";

const getRooms = async (name) => {
  if (name.length > 0) {
    try {
      const data = await axios.get(`${url}/api/rooms/bookedRooms/${name}`);
      return data.data;
    } catch (e) {
      console.log(e);
    }
  }
};

const bookRoom = async (roomDetails) => {
  try {
    await axios.post(`${url}/api/rooms/bookRoom`, roomDetails);
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

const deleteRoom = async(booking_id) => {
  try{
   const data = await axios.delete(`${url}/api/rooms/deleteRoom/${booking_id}`);
   return data;
  }catch(e){
   console.log(e);
  }
}

export { getRooms, bookRoom, updateRoom, deleteRoom};
