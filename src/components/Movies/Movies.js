import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import Movie from '../Movie';

import './Movies.css';

@inject('moviesStore')
@observer
export default class Movies extends Component {
  render() {
    const popularMovies = toJS(this.props.moviesStore.movies);

    const movies = popularMovies.map((item, index) => {
      return (
        <Movie key={index} item={item} />
      );
    })

    return (
      <div className="Movies">
        <div className="Movies__content">
          {movies}
        </div>
      </div>
    );
  }
}
