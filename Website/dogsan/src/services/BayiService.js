import http from "../http-common";

const getAll = () => {
  return http.get("/bayi");
};

const get = (id) => {
  return http.get(`/bayi/${id}`);
};

const create = (data) => {
  return http.post("/bayi", data);
};

const update = (id, data) => {
  return http.put(`/bayi/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/bayi/${id}`);
};

const removeAll = () => {
  return http.delete(`/bayi`);
};

const findByTitle = (baslik) => {
  return http.get(`/bayi?baslik=${baslik}`);
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
