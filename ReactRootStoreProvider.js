'use strict';

var React = require('React');


/** @constructor */
function ReactRootStoreProvider(props) {
  React.Component.call(this, props);

  this.data = {};
}

ReactRootStoreProvider.childContextTypes = {
  __rootStoreProviderInstance: React.PropTypes.any
};

ReactRootStoreProvider.prototype = Object.create(React.Component.prototype);
ReactRootStoreProvider.prototype.constructor = ReactRootStoreProvider;

ReactRootStoreProvider.prototype.getChildContext = function() {
  return {
    __rootStoreProviderInstance: this
  };
};

ReactRootStoreProvider.prototype.render = function() {
  return this.props.render();
};

module.exports = ReactRootStoreProvider;
