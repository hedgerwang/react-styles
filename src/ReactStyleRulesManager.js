/**
 * @providesModule ReactStyleRulesManager
 * @jsx React.DOM
 */

'use strict'

var React = require('React');
var ReactStyleRules = require('ReactStyleRules');

/**
 * @param {number} maxRulesLengthPerStyle
 * @param {number} maxComponentsLength
 * @constructor
 */
function ReactStyleRulesManager(maxRulesLengthPerStyle, maxComponentsLength) {
  /**
   * @type {array<ReactStyleRules>}
   */
  this._styleRulesList = [];

  /**
   * @type {number}
   */
  this._maxRulesLengthPerStyle = maxRulesLengthPerStyle;

  /**
   * @type {number}
   */
  this._maxComponentsLength = maxComponentsLength;
}

/**
 * @param {ReactStyleRules} styleRules
 */
ReactStyleRulesManager.prototype.addRules = function(styleRules) {
  if (!styleRules || styleRules.constructor !== ReactStyleRules) {
    throw new Error('Invalid rules');
  }
  var styleRulesList = this._styleRulesList;
  for (var i = 0, j = styleRulesList.lenth; i < j; i++) {
    var anotherReactStyleRules = styleRulesList[i];
    if (anotherReactStyleRules === styleRules) {
      return;
    }
  }
  styleRulesList.push(styleRules);
};


/**
 * @return {array<object>}
 */
ReactStyleRulesManager.prototype.renderToComponents = function() {
  var styleRulesList = this._styleRulesList;
  var components = [];
  var cssText = '';
  var rulesCount = 0;
  var index = 0;
  var maxRulesLengthPerStyle = this._maxRulesLengthPerStyle;
  var maxComponentsLength = this._maxComponentsLength;

  for (var i = 0, j = styleRulesList.length; i < j; i++) {
    var styleRules = styleRulesList[i];
    var newRulesCount = rulesCount + styleRules.length;
    if (newRulesCount > maxRulesLengthPerStyle) {
      if (cssText) {
        components.push(
          <style
            key={'s' + (index++)}
            dangerouslySetInnerHTML={{__html: cssText}}
          />
        );
        cssText = '';
        rulesCount = 0;
      }
    } else {
      rulesCount = newRulesCount;
      cssText += styleRules.toString();
    }
  }

  if (cssText) {
    components.push(
      <style
        key={'s' + (index++)}
        dangerouslySetInnerHTML={{__html: cssText}}
      />
    );
    cssText = null;
  }

  if (components.lenth > maxComponentsLength) {
    throw new Error('Too many styles');
  }

  return components;
}

module.exports = ReactStyleRulesManager;

