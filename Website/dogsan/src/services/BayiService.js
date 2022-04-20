import http from "../http-common";
import axios from "axios";

const getAll = () => {
  return axios.get("/bayi");
};

const get = (id) => {
  return axios.get(`/bayi/${id}`,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }
  );
};

const create = (data) => {
  return axios.post("/bayi", data,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }
  );
};

const update = (id, data) => {
  return axios.put(`/bayi/${id}`, data,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }
  );
};
const remove = (id) => {
  return axios.delete(`/bayi/${id}`,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }
  );
};

const removeAll = () => {
  return axios.delete(`/bayi`,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  }
  );
};

const findByTitle = (baslik) => {
  return axios.get(`/bayi?baslik=${baslik}`,
  {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  });
};

const bayiservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default bayiservice;