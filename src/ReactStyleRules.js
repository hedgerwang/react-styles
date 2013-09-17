/**
 * @providesModule ReactStyleRules
 */

'use strict'

/**
 * @type {RegExp}
 */
var CLASSNAME_SELECTOR_PATTERN = /(\.)([a-zA-Z_\-][a-zA-Z_\-\d]*)/ig;

/**
 * @type {RegExp}
 */
var HYPHENATE_PATTERN = /([a-z])([A-Z])/g;

/**
 * @type {number}
 */
var _namespaceID = 0;

/**
 * @param {object} rulesMap
 * @constructor
 */
function ReactStyleRules(rulesMap) {
  var namespace = '_SR_' + (_namespaceID++) + '_';
  var i = 0;
  var rules = [];
  for (var selectors in rulesMap) {
    var ruleText = namespacify(selectors, '.' + namespace + '$2') + '{';
    var declarations = rulesMap[selectors];
    for (var property in declarations) {
      var value = declarations[property];
      ruleText += hyphenate(property) + ':' + value + ';';
    }
    ruleText += '}';
    rules[i] = ruleText;
    i++;
  }

  this._rules = rules;
  this._namespace = namespace;
  this.getClassName = this.getClassName.bind(this);
}

/**
 * @param {number}
 * @return {string}
 */
ReactStyleRules.prototype.item = function(index) {
  return this._rules[index] || '';
};

/**
 * @return {number}
 */
ReactStyleRules.prototype.getLength = function() {
  return this._rules.lenth;
};

/**
 * @return {string}
 */
ReactStyleRules.prototype.toString = function() {
  return this._rules.join('\n');
};

/**
 * @param {string} className
 * @return {string}
 */
ReactStyleRules.prototype.getClassName = function(className) {
  return this._namespace + className;
};

/**
 * @param {string} str
 * @param {string} newSubStr
 * @return {string}
 */
function namespacify(str, newSubStr) {
  return str.replace(CLASSNAME_SELECTOR_PATTERN, newSubStr);
}

/**
 * @param {string} str
 * @return {string}
 */
function hyphenate(str) {
  return str.replace(HYPHENATE_PATTERN, '$1-$2').toLowerCase();
}

module.exports = ReactStyleRules;
