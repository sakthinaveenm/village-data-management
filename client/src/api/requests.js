const requests = {
  getUserType: `/usertypes`,
  postAdminreg: `/adminreg`,
  fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;
