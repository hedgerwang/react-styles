React Styles
============

Utility to manage styles.


##### Code Example

    var ExampleStyleRules = require('ExampleStyleRules');
    var React = require('React');
    var ReactStyle = require('ReactStyle');

    ReactStyle.addRules(ExampleStyleRules);

    var ExampleClassName = ExampleStyleRules.ClassName;

    var Example = React.createClass({
      render: function() {
        return (
          <html>
            <head>
              <title>React Styles Example</title>
              {ReactStyle.renderToComponents()}
            </head>
            <body class={ExampleClassName.body}>
              Hello World
            </body>
          </html>
        );
      }
    });

    module.exports = Example;
