import http from "../http-common";

const getAll = () => {
  return http.get("/igne");
};

const get = id => {
  return http.get(`/igne/${id}`);
};

const create = data => {
  return http.post("/igne", data);
};

const update = (id, data) => {
  return http.put(`/igne/${id}`, data);
};

const remove = id => {
  return http.delete(`/igne/${id}`);
};

const removeAll = () => {
  return http.delete(`/igne`);
};

const findByTitle = baslik => {
  return http.get(`/igne?baslik=${baslik}`);
};

const IgneService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default IgneService;