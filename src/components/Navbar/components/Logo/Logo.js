import React, { Component } from 'react';

import './Logo.css';
import Shiba from './shiba.png';

export default class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img className="Logo__image" src={Shiba} alt={"logo"} />
      </div>
    );
  }
}
