import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from '../pages';
import StarshipsDetails from '../starship';

import Swapi from '../../services/api';
import {SwapiProvider, SwapiConsumer} from '../../services/provider';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };

    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
  }

  loginButtonClickHandler() {
    this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiProvider value={new Swapi()}>
          <Router basename="/starwarsdb-react">
            <div className="container-xl">

              <Header />
              <RandomPlanet />

                {/* I know that structure is looking pretty complicating with swapi consumer,
                and only way i know how to make it look simpler, by now, is compose callback hell, which i dont really like */}
                <SwapiConsumer>
                  {
                    (swapiProps) => {
                      const {getStarship, getStarshipImage} = swapiProps;

                      return (
                        <Switch>
                          <Route path="/" exact render={() => {
                            return (
                              <div className="jumbotron">
                                <h2 className="display-5 text-center mb-5 text-warning">Welcome to StarWars DataBase!</h2>
                                <p className="lead text-center">Choose from navigation bar above what do you want to know about Star Wars Universe!</p>
                              </div>
                            );
                          }} />
                          <Route path="/people/:id?" component={PeoplePage} />
                          <Route path="/planets" component={PlanetsPage} />
                          <Route path="/starships/" exact component={StarshipsPage} />
                          <Route path="/starships/:id" render={({match}) => {
                            const {id} = match.params;
                            return <StarshipsDetails itemId={id} getData={getStarship} getImageUrl={getStarshipImage} />;
                          }} />
                          <Route path="/login" render={() => <LoginPage isLoggedIn={this.state.isLoggedIn} onLoginButtonClick={this.loginButtonClickHandler} />} />
                          <Route path="/secret" render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />} />

                          <Route render={() => {
                            return (
                              <div className="alert alert-dismissible alert-danger text-center p-4">
                                <strong className="display-4">404</strong>
                                <h2 className="mb-4">Page Not Found</h2>
                                <p className="mb-3">Oh shoot, seems like we dont have this page... Go back to main page or try something else!</p>
                                <Link to="/" className="btn btn-info text-decoration-none">Main Page</Link>
                              </div>
                            );
                          }} />
                        </Switch>
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
