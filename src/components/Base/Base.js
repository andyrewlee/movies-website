import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Navbar from '../Navbar';
import Pagination from '../Pagination';
import Movies from '../Movies';

import './Base.css';

@inject('moviesStore')
@observer
export default class Base extends Component {
  onClick = () => {
    this.props.moviesStore.incrementCounter();
  }

  render() {
    return (
      <div className="Base">
        <Navbar />
        <div className="Base__content">
          <Movies />
        </div>
        <Pagination />
      </div>
    );
  }
}
