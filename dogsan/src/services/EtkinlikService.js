import http from "../http-common";

const getAll = () => {
  return http.get("/etkinlik");
};

const get = id => {
  return http.get(`/etkinlik/${id}`);
};

const create = data => {
  return http.post("/etkinlik", data);
};

const update = (id, data) => {
  return http.put(`/etkinlik/${id}`, data);
};

const remove = id => {
  return http.delete(`/etkinlik/${id}`);
};

const removeAll = () => {
  return http.delete(`/etkinlik`);
};

const findByTitle = baslik => {
  return http.get(`/etkinlik?baslik=${baslik}`);
};

const EtkinlikService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default EtkinlikService;