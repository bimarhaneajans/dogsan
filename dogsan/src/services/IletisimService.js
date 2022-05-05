import http from "../http-common";

const getAll = () => {
  return http.get("/iletisim");
};

const get = id => {
  return http.get(`/iletisim/${id}`);
};

const create = data => {
  return http.post("/iletisim", data);
};

const update = (id, data) => {
  return http.put(`/iletisim/${id}`, data);
};

const remove = id => {
  return http.delete(`/iletisim/${id}`);
};

const removeAll = () => {
  return http.delete(`/iletisim`);
};

const findByTitle = baslik => {
  return http.get(`/iletisim?baslik=${baslik}`);
};

const IletisimService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default IletisimService;