import axios from "axios";

const api = axios.create({
  baseURL: "https://api.feegow.com.br/api",
  headers: {
    "Content-Type": "application/json",
    "x-access-token":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38",
  },
});

export default api;
