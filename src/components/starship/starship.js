import React, {Component} from 'react';

import CardView, {CardRecord} from '../card';

export default class Starship extends Component {
  render() {

    return (
      <CardView {...this.props}>
        <CardRecord field="model" label="Model" />
        <CardRecord field="manufacturer" label="Manufacturer" />
        <CardRecord field="costInCredits" label="Cost In Credits" />
        <CardRecord field="length" label="Length" />
        <CardRecord field="crew" label="Crew" />
        <CardRecord field="passengers" label="Passengers" />
        <CardRecord field="cargoCapacity" label="Capacity" />
      </CardView>
    );
  }
}
