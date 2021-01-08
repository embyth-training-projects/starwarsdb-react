import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import SectionView from '../section';
import List from '../list';
import Starship from '../starship';

import {SwapiConsumer} from '../../services/provider';

export default class StarshipsPage extends Component {
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
              const {getAllStarships, getStarship, getStarshipImage} = swapiProps;

              return (
                <SectionView
                  left={<List onListItemClick={this.listItemClickHandler} getData={getAllStarships} />}
                  right={<Starship itemId={this.state.selectedItem} getData={getStarship} getImageUrl={getStarshipImage} />}
                />
              );
            }
          }
        </SwapiConsumer>
      </ErrorBoundry>
    );
  }
}
