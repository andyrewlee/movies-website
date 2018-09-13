import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Search.css';

@inject('moviesStore')
@observer
export default class Search extends Component {
  handleChange = async (e) => {
    const query = e.target.value;
    await this.props.moviesStore.searchMovieTitle(query);
  };

  render() {
    return (
      <div className="Search">
        <input
          className="Search__input"
          type="text"
          placeholder="Search movies..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
