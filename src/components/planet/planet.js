import React, {Component} from 'react';

import CardView, {CardRecord} from '../card';

export default class Planet extends Component {
  render() {

    return (
      <CardView {...this.props}>
        <CardRecord field="population" label="Population" />
        <CardRecord field="rotationPeriod" label="Rotation Period" />
        <CardRecord field="diameter" label="Diameter" />
      </CardView>
    );
  }
}
