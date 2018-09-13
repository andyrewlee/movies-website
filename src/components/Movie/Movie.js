import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Movie.css';

import MovieDescription from './components/MovieDescription';
import ExtraDetails from './components/ExtraDetails';

@inject('moviesStore')
@observer
export default class Movie extends Component {
  render() {
    const movie = this.props.item;
    const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
      <div className="Movie">
        <div className="Movie__image-container">
          <img className="Movie__image" src={poster} alt={"poster"} />
        </div>
        <div className="Movie__detail-container">
          <MovieDescription movie={movie} />
          <ExtraDetails movie={movie} />
        </div>
      </div>
    );
  }
}
