const API_URL = 'https://api.themoviedb.org/3';

export default class MovieDBClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async handleRequest(url) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getMovies(config) {
    const url = `${API_URL}/search/movie?api_key=${this.apiKey}&query=${config.query}`;
    return await this.handleRequest(url);
  }

  async getGenres() {
    const url = `${API_URL}/genre/movie/list?api_key=${this.apiKey}`;
    return await this.handleRequest(url);
  }

  async getPopularMovies(config) {
    const url = `${API_URL}/movie/popular?api_key=${this.apiKey}&page=${config.page}`;
    return await this.handleRequest(url);
  }
}
