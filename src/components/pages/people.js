import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import SectionView from '../section';
import List from '../list';
import Person from '../person';

import {SwapiConsumer} from '../../services/provider';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null,
    };

    this.listItemClickHandler = this.listItemClickHandler.bind(this);
  }

  listItemClickHandler(selectedItem) {
    this.setState({selectedItem});
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiConsumer>
          {
            (swapiProps) => {
              const {getAllPeople, getPerson, getPersonImage} = swapiProps;

              return (
                <SectionView
                  left={<List onListItemClick={this.listItemClickHandler} getData={getAllPeople} />}
                  right={<Person itemId={this.state.selectedItem} getData={getPerson} getImageUrl={getPersonImage} />}
                />
              );
            }
          }
        </SwapiConsumer>
      </ErrorBoundry>
    );
  }
}
