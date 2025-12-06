import http from "./http";

export default {
  getPopular(page = 1) {
    return http.get("/movie/popular", {
      params: {
        page: page
      }
    });
  },
};
