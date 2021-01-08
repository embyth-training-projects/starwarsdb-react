import React, {Component} from 'react';

import CardView, {CardRecord} from '../card';

export default class Person extends Component {
  render() {

    return (
      <CardView {...this.props}>
        <CardRecord field="gender" label="Gender" />
        <CardRecord field="birthYear" label="Birth Year" />
        <CardRecord field="eyeColor" label="Eye color" />
      </CardView>
    );
  }
}
