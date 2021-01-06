import React, {Component} from 'react';

import Spinner from '../spinner';
import Swapi from '../../services/api';

import './list.css';

export default class List extends Component {
  constructor() {
    super();

    this._swapi = new Swapi();
    this.state = {
      people: {},
      isLoading: true
    };
  }

  componentDidMount() {
    this._swapi.getAllPeople()
      .then((people) => this.setState({people, isLoading: false}));
  }

  _getListItems(people) {
    return people.map(({id, name}) => {
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onListItemClick(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const {isLoading, people} = this.state;

    return (
      <ul className="item-list list-group">
        {isLoading ? <Spinner /> : this._getListItems(people)}
      </ul>
    );
  }
}
