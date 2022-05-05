import http from "../http-common";

const getAll = () => {
  return http.get("/kategori");
};

const get = id => {
  return http.get(`/kategori/${id}`);
};

const create = data => {
  return http.post("/kategori", data);
};

const update = (id, data) => {
  return http.put(`/kategori/${id}`, data);
};

const remove = id => {
  return http.delete(`/kategori/${id}`);
};

const removeAll = () => {
  return http.delete(`/kategori`);
};

const findByTitle = baslik => {
  return http.get(`/kategori?baslik=${baslik}`);
};

const KategoriService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default KategoriService;