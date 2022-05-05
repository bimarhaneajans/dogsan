import http from "../http-common";

const getAll = () => {
  return http.get("/sosyalsorumluluk");
};

const get = id => {
  return http.get(`/sosyalsorumluluk/${id}`);
};

const create = data => {
  return http.post("/sosyalsorumluluk", data);
};

const update = (id, data) => {
  return http.put(`/sosyalsorumluluk/${id}`, data);
};

const remove = id => {
  return http.delete(`/sosyalsorumluluk/${id}`);
};

const removeAll = () => {
  return http.delete(`/sosyalsorumluluk`);
};

const findByTitle = baslik => {
  return http.get(`/sosyalsorumluluk?baslik=${baslik}`);
};

const SosyalssService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default SosyalssService;