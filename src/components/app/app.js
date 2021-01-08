import React, {Component} from 'react';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="container-xl">
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
}
