import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import SectionView from '../section';
import List from '../list';
import Planet from '../planet';

import {SwapiConsumer} from '../../services/provider';

export default class PlanetsPage extends Component {
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
              const {getAllPlanets, getPlanet, getPlanetsImage} = swapiProps;

              return (
                <SectionView
                  left={<List onListItemClick={this.listItemClickHandler} getData={getAllPlanets} />}
                  right={<Planet itemId={this.state.selectedItem} getData={getPlanet} getImageUrl={getPlanetsImage} />}
                />
              );
            }
          }
        </SwapiConsumer>
      </ErrorBoundry>
    );
  }
}
