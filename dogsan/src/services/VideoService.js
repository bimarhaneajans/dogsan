import http from "../http-common";

const getAll = () => {
  return http.get("/video/files");
};

const get = id => {
  return http.get(`/video/${id}`);
};

const create = data => {
  return http.post("/video", data);
};

const update = (id, data) => {
  return http.put(`/video/${id}`, data);
};

const remove = id => {
  return http.delete(`/video/${id}`);
};

const removeAll = () => {
  return http.delete(`/video`);
};

const findByTitle = ismi => {
  return http.get(`/video?ismi=${ismi}`);
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