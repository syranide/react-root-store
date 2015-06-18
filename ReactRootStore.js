'use strict';

var React = require('React');
var ReactRootStoreProperty = require('./ReactRootStoreProperty');
var ReactRootStoreProvider = require('./ReactRootStoreProvider');


var ReactRootStore = {
  createProperty: function(defaultValue) {
    return new ReactRootStoreProperty(defaultValue);
  },

  contextTypes: {
    __rootStoreProviderInstance: React.PropTypes.any
  },

  renderWithRootStore: function(renderCallback) {
    return React.createElement(ReactRootStoreProvider, {render: renderCallback});
  }
};


module.exports = ReactRootStore;
