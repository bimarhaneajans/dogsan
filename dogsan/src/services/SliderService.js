import http from "../http-common";

const getAll = () => {
  return http.get("/slider/files");
};

const get = id => {
  return http.get(`/slider/${id}`);
};

const create = data => {
  return http.post("/slider", data);
};

const update = (id, data) => {
  return http.put(`/slider/${id}`, data);
};

const remove = id => {
  return http.delete(`/slider/${id}`);
};

const removeAll = () => {
  return http.delete(`/slider`);
};

const findByTitle = ismi => {
  return http.get(`/slider?ismi=${ismi}`);
};

const SliderService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default SliderService;