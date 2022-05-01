import axios from "axios";

export default axios.create({
  baseURL: "https://bavrim.madilink.net",
  headers: {
    "Content-type": "application/json"
  }
});