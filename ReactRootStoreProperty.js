'use strict';

var nextPropertyIndex = 0;

function getRootStoreData(instance) {
  var rootStoreProvider = instance.context.__rootStoreProviderInstance;
  if (rootStoreProvider) {
    return rootStoreProvider.data;
  }
  if (!('__rootStoreProviderInstance' in instance.context)) {
    throw new Error("instance does not have context");
  }
  throw new Error("context provider not available");
}


function ReactRootStoreProperty(defaultValue) {
  this.propertyIndex = nextPropertyIndex++;
  this.defaultValue = defaultValue;
}

ReactRootStoreProperty.prototype.get = function(instance) {
  var propertyIndex = this.propertyIndex;
  var rootStoreData = getRootStoreData(instance);

  if (propertyIndex in rootStoreData) {
    return rootStoreData[propertyIndex];
  }

  var propertyDefaultValue = this.defaultValue;
  var propertyDefaultValueType = typeof propertyDefaultValue;

  var actualDefaultValue = propertyDefaultValue;
  if (propertyDefaultValueType === 'function') {
    actualDefaultValue = propertyDefaultValue();
  } else if (propertyDefaultValueType === 'object' && propertyDefaultValue !== null) {
    throw new Error('objects cannot be default values, use a function');
  }

  return rootStoreData[propertyIndex] = actualDefaultValue;
};

ReactRootStoreProperty.prototype.set = function(instance, value) {
  var rootStoreData = getRootStoreData(instance);
  rootStoreData[this.propertyIndex] = value;
};


module.exports = ReactRootStoreProperty;
