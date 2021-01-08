import React, {Component} from 'react';

import Swapi from '../../services/api';
import Spinner from '../spinner';
import Error from '../error';

import './random-planet.css';

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`Planet ${name} appearance`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this._swapi = new Swapi();

    this.state = {
      planet: {},
      isLoading: true,
      isError: false,
    }
  }

  componentDidMount() {
    const id = Math.floor(Math.random() * (30 - 2)) + 2;

    this._swapi.getPlanet(id)
      .then((planet) => this.setState({planet, isLoading: false}))
      .catch(() => this.setState({isError: true, isLoading: false}));
  }

  render() {
    const {planet, isLoading, isError} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {isLoading ? <Spinner /> : null}
        {isError ? <Error /> : null}
        {!(isLoading || isError) ? <PlanetView planet={planet} /> : null}
      </div>
    );
  }
}
