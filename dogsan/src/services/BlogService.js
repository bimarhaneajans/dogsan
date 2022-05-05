import http from "../http-common";

const getAll = () => {
  return http.get("/blog");
};

const get = id => {
  return http.get(`/blog/${id}`);
};

const create = data => {
  return http.post("/blog", data);
};

const update = (id, data) => {
  return http.put(`/blog/${id}`, data);
};

const remove = id => {
  return http.delete(`/blog/${id}`);
};

const removeAll = () => {
  return http.delete(`/blog`);
};

const findByTitle = baslik => {
  return http.get(`/blog?baslik=${baslik}`);
};

const bayiervice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default bayiervice;