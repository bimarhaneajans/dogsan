import http from "../http-common";

const getAll = () => {
  return http.get("/duyuru");
};

const get = id => {
  return http.get(`/duyuru/${id}`);
};

const create = data => {
  return http.post("/duyuru", data);
};

const update = (id, data) => {
  return http.put(`/duyuru/${id}`, data);
};

const remove = id => {
  return http.delete(`/duyuru/${id}`);
};

const removeAll = () => {
  return http.delete(`/duyuru`);
};

const findByTitle = baslik => {
  return http.get(`/duyuru?baslik=${baslik}`);
};

const DuyuruService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default DuyuruService;