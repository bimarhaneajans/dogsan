import http from "../http-common";

const getAll = () => {
  return http.get("/deger");
};

const get = id => {
  return http.get(`/deger/${id}`);
};

const create = data => {
  return http.post("/deger", data);
};

const update = (id, data) => {
  return http.put(`/deger/${id}`, data);
};

const remove = id => {
  return http.delete(`/deger/${id}`);
};

const removeAll = () => {
  return http.delete(`/deger`);
};

const findByTitle = baslik => {
  return http.get(`/deger?baslik=${baslik}`);
};

const DegerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default DegerService;