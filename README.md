# react-root-store

```js
var testProperty = ReactRootStore.createProperty(0);

var HelloWorld = React.createClass({
  contextTypes: ReactRootStore.contextTypes,

  render: function() {
    var initialValue = testProperty.get(this);
    testProperty.set(this, 3);
    return <div>Hello {initialValue} {testProperty.get(this)}</div>;
  }
});

React.render(ReactRootStore.wrapElement(function() {
  return <HelloWorld />;
}), document.getElementById('container'));
```
