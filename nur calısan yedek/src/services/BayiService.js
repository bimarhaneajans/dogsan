import http from "../http-common";
import axios from "axios";

const getAll = () => {
  return axios.get("/bayi");
};

const get = (id) => {
  return axios.get(`/bayi/${id}`,
  {
    headers:{ }
  }
  );
};

const create = (data) => {
  return axios.post("/bayi", data,
  {
    headers:{ }
  }
  );
};

const update = (id, data) => {
  return axios.put(`/bayi/${id}`, data,
  {
    headers:{}
  }
  );
};
const remove = (id) => {
  return axios.delete(`/bayi/${id}`,
  {
    headers:{}
  }
  );
};

const removeAll = () => {
  return axios.delete(`/bayi`,
  {
    headers:{}
  }
  );
};

const findByTitle = (baslik) => {
  return axios.get(`/bayi?baslik=${baslik}`,
  {
    headers:{}
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
