import http from "../http-common";

const getAll = () => {
  return http.get("/sehir");
};

const get = id => {
  return http.get(`/sehir/${id}`);
};

const create = data => {
  return http.post("/sehir", data);
};

const update = (id, data) => {
  return http.put(`/sehir/${id}`, data);
};

const remove = id => {
  return http.delete(`/sehir/${id}`);
};

const removeAll = () => {
  return http.delete(`/sehir`);
};

const findByTitle = sehirAdi => {
  return http.get(`/sehir?sehirAdi=${sehirAdi}`);
};

const SehirService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default SehirService;