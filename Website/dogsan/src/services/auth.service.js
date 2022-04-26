import axios from "axios";

const API_URL = "https://bavrim.madilink.net/api/auth/";

function register  (username, email, password)  {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

function login  (username, password)  {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

function logout  ()   {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

//8080 dedigi webservis 
//8081 websesite 