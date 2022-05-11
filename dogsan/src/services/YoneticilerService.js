import http from "../http-common";

const getAll = () => {
  return http.get("/yoneticiler");
};

const get = id => {
  return http.get(`/yoneticiler/${id}`);
};

const create = data => {
  return http.post("/yoneticiler", data);
};

const update = (id, data) => {
  return http.put(`/yoneticiler/${id}`, data);
};

const remove = id => {
  return http.delete(`/yoneticiler/${id}`);
};

const removeAll = () => {
  return http.delete(`/yoneticiler`);
};

const findByTitle = yoneticiadi => {
  return http.get(`/yoneticiler?yoneticiadi=${yoneticiadi}`);
};

const yoneticilerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default yoneticilerService;