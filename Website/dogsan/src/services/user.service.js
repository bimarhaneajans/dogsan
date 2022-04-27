import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://46.4.116.218:3000/api/test/";

class UserService {
/*   getPublicContent() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: 'https://bavrim.madilink.net/api/test/all',
      headers: {"Access-Control-Allow-Origin": "*"}
    };
    return axios(config);
  } */
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}



export default new UserService();
