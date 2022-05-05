import http from "../http-common";

const getAll = () => {
  return http.get("/tarihce");
};

const get = id => {
  return http.get(`/tarihce/${id}`);
};

const create = data => {
  return http.post("/tarihce", data);
};

const update = (id, data) => {
  return http.put(`/tarihce/${id}`, data);
};

const remove = id => {
  return http.delete(`/tarihce/${id}`);
};

const removeAll = () => {
  return http.delete(`/tarihce`);
};

const findByTitle = baslik => {
  return http.get(`/tarihce?baslik=${baslik}`);
};

const TarihceService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TarihceService;