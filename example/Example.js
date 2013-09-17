/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

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
