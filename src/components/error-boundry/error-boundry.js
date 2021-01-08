import React, {Component} from 'react';

import ErrorView from '../error';

export default class ErrorBoundry extends Component {
  constructor() {
    super();

    this.state = {
      isError: false
    }
  }

  componentDidCatch() {
    this.setState({isError: true});
  }

  render() {
    if (this.state.isError) {
      return <ErrorView />;
    }

    return this.props.children;
  }
}
