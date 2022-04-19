import axios from "axios";

export default axios.create({
  baseURL: "https://bavrim.madilink.net/api",
  headers: {
    "Content-type": "application/json"
  }
});