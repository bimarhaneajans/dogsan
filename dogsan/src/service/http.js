import axios from "axios";

const baseURL = "http://localhost:3000/api/auth/";

const customAxios = axios.create({
  baseURL,
  headers: {  "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const requestHandler = (request) => {
  const token = localStorage.getItem("token") ?? null;

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
