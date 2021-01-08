import React, {Component} from 'react';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';

import Swapi from '../../services/api';
import {SwapiProvider} from '../../services/provider';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={new Swapi()}>
          <div className="container-xl">

            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}
