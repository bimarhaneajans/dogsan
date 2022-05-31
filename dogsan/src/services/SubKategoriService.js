import http from "../http-common";

const getAll = () => {
  return http.get("/subkategori");
};

const get = id => {
  return http.get(`/subkategori/${id}`);
};
const getSubone = id => {
  return http.get(`/subkategori/findone/${id}`);
};

const create = data => {
  return http.post("/subkategori", data);
};

const update = (id, data) => {
  return http.put(`/subkategori/${id}`, data);
};

const remove = id => {
  return http.delete(`/subkategori/${id}`);
};

const removeAll = () => {
  return http.delete(`/subkategori`);
};

const findByTitle = subkategoriadi => {
  return http.get(`/subkategori?subkategoriadi=${subkategoriadi}`);
};

const subkategoriService = {
  getAll,
  getSubone,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default subkategoriService;