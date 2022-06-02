import axios from "axios";

export default axios.create({
  baseURL: "https://bavrim.madilink.net",
  headers: {
    "Accept":"multipart/form-data; boundary=MyBoundary",
  }
});

 