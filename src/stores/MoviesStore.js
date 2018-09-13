import { observable, computed, action } from 'mobx';
import MoviesDBClient from '../clients/MoviesDbClient';

const MODE = {
  POPULAR: 0,
  TITLE: 1,
};

export default class MoviesStore {
  @observable counter = 0;
  @observable popularRes = {};
  @observable queriedRes = {};
  @observable genresHash = {};
  @observable genres = [];
  @observable currentPage = 1;
  @observable mode = MODE.POPULAR;

  query = '';

  constructor() {
    this.client = new MoviesDBClient(process.env.REACT_APP_API_KEY);
    this.initialize();
  }

  @computed get popularMovies() {
    return this.popularRes.results || [];
  }

  @computed get queriedMovies() {
    return this.queriedRes.results || [];
  }

  @computed get pageCount() {
    if (this.mode === MODE.POPULAR) {
      return this.popularRes.total_pages || 1;
    } else if (this.mode === MODE.TITLE) {
      return this.queriedRes.total_pages || 1;
    }
  }

  @computed get movies() {
    if (this.mode === MODE.POPULAR) {
      return this.popularMovies;
    } else if (this.mode === MODE.TITLE) {
      return this.queriedMovies;
    }
  }

  @action incrementCounter() {
    this.counter += 1;
  }

  @action async setCurrentPage(newPage) {
    this.currentPage = newPage;
    await this.reload();
  }

  @action async searchMovieTitle(query) {
    if (query === '') {
      this.mode = MODE.POPULAR;
    } else {
      this.mode = MODE.TITLE;
      this.currentPage = 1;
    }

    this.query = query;
    await this.reload();
  }

  @action async initialize() {
    if (this.mode === MODE.POPULAR) {
      this.popularRes = await this.client.getPopularMovies({
        page: this.currentPage,
      });

      const genres = await this.client.getGenres();
      const allGenres = genres.genres;
      for (const genre of allGenres) {
        this.genresHash[genre.id] = genre.name;
      }
      this.genres = genres.genres;
    } else if (this.mode === MODE.TITLE) {
      this.queriedRes = await this.client.getMovies({
        query: this.query,
      });
    }
  }

  @action async reload() {
    if (this.mode === MODE.POPULAR) {
      this.popularRes = await this.client.getPopularMovies({
        page: this.currentPage,
      });
    } else if (this.mode === MODE.TITLE) {
      this.queriedRes = await this.client.getMovies({
        query: this.query,
        page: this.currentPage,
      });
    }
  }

  findGenre(id) {
    return this.genresHash[id];
  }
}
