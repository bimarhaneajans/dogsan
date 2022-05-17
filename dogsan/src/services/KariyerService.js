import http from "../http-common";

const getAll = () => {
  return http.get("/kariyer");
};

const get = id => {
  return http.get(`/kariyer/${id}`);
};

const create = data => {
  return http.post("/kariyer", data);
};

const update = (id, data) => {
  return http.put(`/kariyer/${id}`, data);
};

const remove = id => {
  return http.delete(`/kariyer/${id}`);
};

const removeAll = () => {
  return http.delete(`/kariyer`);
};

const findByTitle = kariyeradi => {
  return http.get(`/kariyer?kariyeradi=${kariyeradi}`);
};

const kariyerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default kariyerService;