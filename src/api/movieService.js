import http from './http'

/**
 * Movie Service
 *
 * Best Practice: Pisahkan logic API ke dalam "service layer".
 * Setiap function bertanggung jawab untuk satu endpoint saja (Single Responsibility).
 * Ini membuat kode mudah di-test dan di-maintain.
 */
export default {
  /**
   * Get popular movies
   * @param {number} page - Page number for pagination
   */
  getPopular(page = 1) {
    return http.get('/movie/popular', {
      params: { page },
    })
  },

  /**
   * Get trending movies this week
   * Endpoint: /trending/movie/week
   */
  getTrending(page = 1) {
    return http.get('/trending/movie/week', {
      params: { page },
    })
  },

  /**
   * Get top rated movies
   * Endpoint: /movie/top_rated
   */
  getTopRated(page = 1) {
    return http.get('/movie/top_rated', {
      params: { page },
    })
  },

  /**
   * Get now playing movies (sedang tayang di bioskop)
   * Endpoint: /movie/now_playing
   */
  getNowPlaying(page = 1) {
    return http.get('/movie/now_playing', {
      params: { page },
    })
  },

  /**
   * Get upcoming movies
   * Endpoint: /movie/upcoming
   */
  getUpcoming(page = 1) {
    return http.get('/movie/upcoming', {
      params: { page },
    })
  },

  /**
   * Discover movies by genre
   * Endpoint: /discover/movie?with_genres=genreId
   *
   * Genre IDs dari TMDB:
   *   28 = Action, 35 = Comedy, 27 = Horror,
   *   878 = Sci-Fi, 10749 = Romance, 16 = Animation
   */
  getByGenre(genreId, page = 1) {
    return http.get('/discover/movie', {
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        page,
      },
    })
  },

  /**
   * Get genre list (untuk mapping genre_ids ke nama genre)
   */
  getGenres() {
    return http.get('/genre/movie/list')
  },
}
