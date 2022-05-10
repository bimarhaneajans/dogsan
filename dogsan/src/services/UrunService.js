import http from "../http-common";

const getAll = () => {
  return http.get("/urun");
};

const get = id => {
  return http.get(`/urun/${id}`);
};

const create = data => {
  return http.post("/urun", data);
};

const update = (id, data) => {
  return http.put(`/urun/${id}`, data);
};

const remove = id => {
  return http.delete(`/urun/${id}`);
};

const removeAll = () => {
  return http.delete(`/urun`);
};

const findByTitle = Adi => {
  return http.get(`/urun?Adi=${Adi}`);
};

const UrunService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default UrunService;