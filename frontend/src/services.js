import axios from "axios";

const url = "http://localhost:5000";

const getRooms = async () => {
  try {
    const data = await axios.get(`${url}/api/rooms`);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export { getRooms };
