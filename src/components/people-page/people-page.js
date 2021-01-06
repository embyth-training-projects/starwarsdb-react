import React, { Component } from 'react';

import List from '../list/list';
import Person from '../person/person';
import Error from '../error/error';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: null,
      isError: false
    };

    this.listItemClickHandler = this.listItemClickHandler.bind(this);
  }

  componentDidCatch() {
    this.setState({isError: true});
  }

  listItemClickHandler(selectedPerson) {
    this.setState({selectedPerson});
  };

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return (
      <div className="row mb-2">
        <div className="col-md-6">
          <List onListItemClick={this.listItemClickHandler} />
        </div>
        <div className="col-md-6">
          <Person personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
