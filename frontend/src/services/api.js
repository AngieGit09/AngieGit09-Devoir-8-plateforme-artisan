import axios from "axios";

const api = axios.create({
  baseURL: "/", //le proxy redirige vers 3001
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
