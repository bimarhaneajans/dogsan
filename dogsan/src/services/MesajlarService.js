import http from "../http-common";

const getAll = () => {
  return http.get("/mesaj");
};

const get = id => {
  return http.get(`/mesaj/${id}`);
};

const create = data => {
  return http.post("/mesaj", data);
};

const update = (id, data) => {
  return http.put(`/mesaj/${id}`, data);
};

const remove = id => {
  return http.delete(`/mesaj/${id}`);
};

const removeAll = () => {
  return http.delete(`/mesaj`);
};

const findByTitle = email => {
  return http.get(`/mesaj?email=${email}`);
};

const mesajService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default mesajService;