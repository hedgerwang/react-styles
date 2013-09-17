React Styles
============

Utility to manage styles.


##### Code Example

    // Require pre-defined style rules.
    var ExampleStyleRules = require('ExampleStyleRules');
    var React = require('React');
    var ReactStyle = require('ReactStyle');

    // Define your own style rules.
    var AnotherStyleRules = ReactStyle.create({
      '.body': {
        borderWidth: '10px'
      }
    });

    // Add style rules to site.
    ReactStyle.addRules(ExampleStyleRules);
    ReactStyle.addRules(MoreStyleRules);

    // Cache references of classNames for later use.
    var ExampleClassName = ExampleStyleRules.ClassName;
    var AnotherStyleRulesClassName = AnotherStyleRules.ClassName;

    var Example = React.createClass({
      render: function() {
        var className = [
          ExampleClassName.body,
          AnotherStyleRulesClassName.body
        ].join(' ');
        return (
          <html>
            <head>
              <title>React Styles Example</title>
              {ReactStyle.renderToComponents()}
            </head>
            <body class={className}>
              Hello World
            </body>
          </html>
        );
      }
    });

    module.exports = Example;
