import http from "../http-common";

const getAll = () => {
  return http.get("/katalog");
};

const get = id => {
  return http.get(`/katalog/${id}`);
};

const create = data => {
  return http.post("/katalog", data);
};

const update = (id, data) => {
  return http.put(`/katalog/${id}`, data);
};

const remove = id => {
  return http.delete(`/katalog/${id}`);
};

const removeAll = () => {
  return http.delete(`/katalog`);
};

const findByTitle = baslik => {
  return http.get(`/katalog?baslik=${baslik}`);
};

const KatalogService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default KatalogService;