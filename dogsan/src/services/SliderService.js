import http from "../http-common";

const getAll = () => {
  return http.get("/slider/files");
};


const get = id => {
  return http.get(`/slider/${id}`);
};

const create = data => {
  return http.post("/slider/veri", data);
};

const update = (id, data) => {
  return http.put(`/slider/veri/${id}`, data);
};

const remove = id => {
  return http.delete(`/slider/veri/${id}`);
};

const removeAll = () => {
  return http.delete(`/slider/veri`);
};

const findByTitle = Veritipi => {
  return http.get(`/slider?Veritipi=${Veritipi}`);
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