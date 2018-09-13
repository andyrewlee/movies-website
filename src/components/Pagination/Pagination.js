import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import ReactPagination from 'react-paginate';
import './Pagination.css'

@inject('moviesStore')
@observer
export default class Pagination extends Component {
  handlePageClick = (data) => {
    const newPage = data.selected + 1;
    this.props.moviesStore.setCurrentPage(newPage);
  };

  render() {
    return (
      <div className="Pagination">
        <ReactPagination
          pageCount={toJS(this.props.moviesStore.pageCount)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          forcePage={this.props.moviesStore.currentPage - 1}
          onPageChange={this.handlePageClick}
        />
      </div>
    );
  }
}
