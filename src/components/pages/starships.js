import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import List from '../list';

import {SwapiConsumer} from '../../services/provider';

class StarshipsPage extends Component {
  render() {
    return (
      <ErrorBoundry>
        <SwapiConsumer>
          {
            (swapiProps) => {
              const {getAllStarships} = swapiProps;

              return (
                <List onListItemClick={(id) => this.props.history.push(id)} getData={getAllStarships} />
              );
            }
          }
        </SwapiConsumer>
      </ErrorBoundry>
    );
  }
}

export default withRouter(StarshipsPage);
