import React, {Component} from 'react';

import './error.css';
import icon from './death-star.png';

export default class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img src={icon} alt="Death Star Error icon"/>
        <span className="boom">BOOM!</span>
        <span>
          something has gone terribly wrong
        </span>
        <span>
          (but we already sent droids to fix it)
        </span>
      </div>
    );
  }
};
