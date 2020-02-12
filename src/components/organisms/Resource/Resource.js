/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StorageService from '../../../services/StorageService';

export default class Resource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageData: {},
    };
  }

  componentDidMount() {
    const { storageKeys } = this.props;
    storageKeys.forEach(key => {
      this.getDataFromStorage(key);
    });
  }

  getDataFromStorage = async storageKey => {
    try {
      this.setState({
        storageData: { [storageKey]: { data: undefined, loading: true } },
      });

      const storageData = await StorageService.getData(storageKey);

      this.setState({
        storageData: { [storageKey]: { data: storageData, loading: false } },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { render, storageKeys, ...rest } = this.props;
    return render({ resource: { ...this.state }, ...rest });
  }
}

Resource.propTypes = {
  render: PropTypes.func.isRequired,
  storageKeys: PropTypes.shape([]),
};

Resource.defaultProps = {
  storageKeys: [],
};