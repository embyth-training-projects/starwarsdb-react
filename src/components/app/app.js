import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import StarshipsDetails from '../starship';

import Swapi from '../../services/api';
import {SwapiProvider, SwapiConsumer} from '../../services/provider';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={new Swapi()}>
          <Router>
            <div className="container-xl">

              <Header />
              <RandomPlanet />

              <Route path="/" exact
                render={() => {
                  return (
                    <div className="jumbotron">
                      <h2 className="display-5 text-center mb-5 text-warning">Welcome to StarWars DataBase!</h2>
                      <p className="lead text-center">Choose from navigation bar above what do you want to know about Star Wars Universe!</p>
                    </div>
                  );
                }}
              />
              <Route path="/people/" component={PeoplePage} />
              <Route path="/planets/" component={PlanetsPage} />
              <Route path="/starships/" exact component={StarshipsPage} />

              <SwapiConsumer>
                {
                  (swapiProps) => {
                    const {getStarship, getStarshipImage} = swapiProps;

                    return (
                      <Route path="/starships/:id" render={({match}) => {
                        const {id} = match.params;
                        return <StarshipsDetails itemId={id} getData={getStarship} getImageUrl={getStarshipImage} />;
                      }} />
                    );
                  }
                }
              </SwapiConsumer>

            </div>
          </Router>
        </SwapiProvider>
      </ErrorBoundry>
    );
  }
}
