import http from "./http";

export default {
  getPopular(page = 1) {
    return http.get("/movie/popular", {
      params: {
        page: page
      }
    });
  },

  getGenresMovies(genreId, page = 1) {
    return http.get("/genre/movie/list", {
      params: {
        with_genres: genreId,
        page: page
      }
    });
  }
};
