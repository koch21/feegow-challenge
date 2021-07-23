import axios from "axios";

const api = axios.create({
  baseURL: "https://api.feegow.com.br/",
});

export default api;
