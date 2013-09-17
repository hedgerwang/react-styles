React Styles
============

Utility to manage styles.


##### Code Example

```javascript

var React = require('React');
var ReactStyle = require('ReactStyle');

// Require pre-defined style rules.
var ExampleStyleRules = require('ExampleStyleRules');

// Define your own style rules.
var AnotherStyleRules = ReactStyle.create({
  '.body': {
    borderWidth: '10px'
  },

  '.body > .header': {
    fontSize: '10px',
    fontWeight: 'bold'
  }
});

// Add style rules to site.
ReactStyle.addRules(ExampleStyleRules);
ReactStyle.addRules(AnotherStyleRules);

var Example = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>React Styles Example</title>
          {ReactStyle.renderToComponents()}
        </head>
        <body class={ExampleStyleRules.body + ' ' + AnotherStyleRules.body}>
          <h1 class={AnotherStyleRules.header}>
            Hello World
          </div>
        </body>
      </html>
    );
  }
});

module.exports = Example;

```
