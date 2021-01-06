import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

export default class App extends Component {
  render() {
    return (
      <div className="container-xl">
        <Header />
        <RandomPlanet />
      </div>
    );
  }
}
