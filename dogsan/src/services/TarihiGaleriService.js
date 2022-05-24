import http from "../http-common";

const getAll = () => {
  return http.get("/TarihceGaleri/files");
}; 
const get = id => {
  return http.get(`/TarihceGarleri/${id}`);
};

const create = data => {
  return http.post("/TarihceGarleri", data);
};

const update = (id, data) => {
  return http.put(`/TarihceGarleri/${id}`, data);
};

const remove = id => {
  return http.delete(`/TarihceGarleri/${id}`);
};

const removeAll = () => {
  return http.delete(`/TarihceGarleri`);
};

const findByTitle = baslik => {
  return http.get(`/TarihceGarleri?baslik=${baslik}`);
};

const TarihiGaleriService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TarihiGaleriService;