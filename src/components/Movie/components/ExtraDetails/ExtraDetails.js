import React, { Component } from 'react';

import './ExtraDetails.css';

export default class ExtraDetails extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <div className="ExtraDetails">
        <div className="ExtraDetails__row">
          <div className="ExtraDetails__detail">
            <div className="ExtraDetails__label">
              Release Date
            </div>
            <div className="ExtraDetails__value">
              {movie.release_date}
            </div>
          </div>
          <div className="ExtraDetails__detail">
            <div className="ExtraDetails__label">
              Vote Average
            </div>
            <div className="ExtraDetails__value">
              {movie.vote_average} / 10
            </div>
          </div>
        </div>
        <div className="ExtraDetails__row">
          <div className="ExtraDetails__detail">
            <div className="ExtraDetails__label">
              Popularity
            </div>
            <div className="ExtraDetails__value">
              {movie.popularity}
            </div>
          </div>
          <div className="ExtraDetails__detail">
            <div className="ExtraDetails__label">
              Vote Count
            </div>
            <div className="ExtraDetails__value">
              {movie.vote_count}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
