import http from "../http-common";

const getAll = () => {
  return http.get("/hakkimizda");
};

const get = id => {
  return http.get(`/hakkimizda/${id}`);
};

const create = data => {
  return http.post("/hakkimizda", data);
};

const update = (id, data) => {
  return http.put(`/hakkimizda/${id}`, data);
};

const remove = id => {
  return http.delete(`/hakkimizda/${id}`);
};

const removeAll = () => {
  return http.delete(`/hakkimizda`);
};

const findByTitle = baslik => {
  return http.get(`/hakkimizda?baslik=${baslik}`);
};

const HakkimizdaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default HakkimizdaService;