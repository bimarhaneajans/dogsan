import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Accept":"multipart/form-data; boundary=MyBoundary",
  }
});

 