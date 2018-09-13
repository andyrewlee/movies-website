import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import stores from '../../stores';
import Base from '../Base';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Base />
      </Provider>
    );
  }
}
