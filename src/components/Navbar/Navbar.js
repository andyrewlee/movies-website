import React, { Component } from 'react';

import Search from './components/Search';
import Logo from './components/Logo';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__content">
          <Logo />
          <Search />
        </div>
      </div>
    );
  }
}
