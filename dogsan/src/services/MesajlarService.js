import http from "../http-common";

const getAll = () => {
  return http.get("/mesajlar");
};

const get = id => {
  return http.get(`/mesajlar/${id}`);
};

const create = data => {
  return http.post("/mesajlar", data);
};

const update = (id, data) => {
  return http.put(`/mesajlar/${id}`, data);
};

const remove = id => {
  return http.delete(`/mesajlar/${id}`);
};

const removeAll = () => {
  return http.delete(`/mesajlar`);
};

const findByTitle = baslik => {
  return http.get(`/mesajlar?baslik=${baslik}`);
};

const MesajlarService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MesajlarService;