import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL, 
  timeout: 10000,
});

http.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;