import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import SectionView from '../section';
import List from '../list';
import Person from '../person';

import {SwapiConsumer} from '../../services/provider';

class PeoplePage extends Component {
  render() {
    const {id} = this.props.match.params;
    const {history} = this.props;

    return (
      <ErrorBoundry>
        <SwapiConsumer>
          {
            (swapiProps) => {
              const {getAllPeople, getPerson, getPersonImage} = swapiProps;

              return (
                <SectionView
                  left={<List onListItemClick={(id) => history.push(id)} getData={getAllPeople} />}
                  right={<Person itemId={id} getData={getPerson} getImageUrl={getPersonImage} />}
                />
              );
            }
          }
        </SwapiConsumer>
      </ErrorBoundry>
    );
  }
}

export default withRouter(PeoplePage);
