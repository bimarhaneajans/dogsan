import axios from "axios";
//const API_URL = "https://46.4.116.218:3000/api/auth/";
const API_URL = "https://lbavrim.madilink.netapi/auth/";

//https://46.4.116.218:3000/api/test/

class AuthService {
  login(username, password) {
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
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();

//8080 dedigi webservis
//8081 websesite
