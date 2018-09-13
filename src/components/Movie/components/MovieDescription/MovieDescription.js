import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './MovieDescription.css';

@inject('moviesStore')
@observer
export default class MovieDescription extends Component {
  formatOverview(yourString) {
    const maxLength = 250;
    let trimmedString = yourString.substr(0, maxLength);

    if (trimmedString.length === maxLength) {
      trimmedString = trimmedString.substr(0, trimmedString.lastIndexOf(' '))
      trimmedString += '...'
    }
    return trimmedString;
  }

  render() {
    const movie = this.props.movie;

    const genreNames = [];
    for (const genreId of movie.genre_ids) {
      genreNames.push(this.props.moviesStore.findGenre(genreId))
    }

    return (
      <div className="MovieDescription">
        <div>
          <h1 className="MovieDescription__title">{movie.title}</h1>
        </div>
        <div className="MovieDescription__genres">
          {genreNames.join(', ')}
        </div>
        <p className="MovieDescription__overview">
          {this.formatOverview(movie.overview)}
        </p>
      </div>
    );
  }
}