import React, {Component} from 'react';

import Spinner from '../spinner';

import './list.css';

export default class List extends Component {
  constructor() {
    super();

    this.state = {
      list: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then((list) => this.setState({list, isLoading: false}))
      .catch(() => this.setState({isLoading: false}));
  }

  _getListItems(list) {
    return list.map(({id, name}) => {
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onListItemClick(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const {isLoading, list} = this.state;

    return (
      <ul className="item-list list-group">
        {isLoading ? <Spinner /> : this._getListItems(list)}
      </ul>
    );
  }
}
