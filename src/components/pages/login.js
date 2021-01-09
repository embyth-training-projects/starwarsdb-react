import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class LoginPage extends Component {
  render() {
    const { isLoggedIn, onLoginButtonClick } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/secret"/>;
    }

    return (
      <div className="jumbotron text-center">
        <h3 className="mb-5">Login to see secret page!</h3>
        <button className="btn btn-success px-5 py-2" onClick={onLoginButtonClick}>
          Login
        </button>
      </div>
    );
  }
}
