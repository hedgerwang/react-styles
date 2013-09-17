React Styles
============

Utility to manage styles.


##### Code Example

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
    ReactStyle.addRules(MoreStyleRules);

    // Cache references of classNames for later use.
    var ExampleClassName = ExampleStyleRules.ClassName;
    var AnotherStyleRulesClassName = AnotherStyleRules.ClassName;

    var Example = React.createClass({
      render: function() {
        var bodyClassName = [
          ExampleClassName.body,
          AnotherStyleRulesClassName.body
        ].join(' ');
        return (
          <html>
            <head>
              <title>React Styles Example</title>
              {ReactStyle.renderToComponents()}
            </head>
            <body class={bodyClassName}>
              <h1 class={AnotherStyleRulesClassName.header}>
                Hello World
              </div>
            </body>
          </html>
        );
      }
    });

    module.exports = Example;
