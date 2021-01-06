import React, {Component} from 'react';

import Swapi from '../../services/api';

import './person.css';

const PersonView = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;

  return (
    <React.Fragment>
      <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={`Character ${name} appearance`} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default class Person extends Component {
  constructor() {
    super();

    this._swapi = new Swapi();
    this.state = {
      person: null,
    };
  }

  _updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this._swapi.getPerson(personId)
      .then((person) => this.setState({person}));
  }

  componentDidMount() {
    this._updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this._updatePerson();
    }
  }

  render() {
    const {person} = this.state;

    return (
      <div className="person-details card">
        {person ? <PersonView person={person} /> : <span>Select a person from a list!</span>}
      </div>
    )
  }
}
