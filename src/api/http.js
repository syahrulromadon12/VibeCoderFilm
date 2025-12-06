// import axios from "axios";

// const http = axios.create({
//   baseURL: import.meta.env.VITE_TMDB_BASE_URL,
//   timeout: 10000,
// });

// // Request Interceptor
// http.interceptors.request.use((config) => {
//   config.headers = config.headers || {};

//   // Inject API key ke URL parameter
//   const apiKey = import.meta.env.VITE_TMDB_API_KEY;
//   if (apiKey) {
//     config.params = {
//       api_key: apiKey,
//       ...(config.params || ""),
//     };
//   }

//   // Inject Bearer access token
//   const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// });

// export default http;

import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL, // ganti sesuai API kamu
  timeout: 10000,
});

// Tambahkan interceptor untuk menyisipkan token
http.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN; // atau localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;