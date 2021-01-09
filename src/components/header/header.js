import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header d-flex">
      <h3>
        <Link to="/">
          StarWarsDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
    </div>
    )
  }
}
