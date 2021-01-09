import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class SecretPage extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="alert alert-dismissible alert-info text-center p-5">
          <h3 className="alert-heading">The big secret is...</h3>
          <strong>Darth Vader is the father of Luke Skywalker!</strong> Sorry, if you didn't know... :(
        </div>
      );
    }

    return <Redirect to="/login" />;
  }
}
