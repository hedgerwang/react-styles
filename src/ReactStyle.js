/**
 * @providesModule ReactStyle
 */

var ReactStyleRules = require('ReactStyleRules');
var ReactStyleRulesManager = require('ReactStyleRulesManager');

// Stylesheet has limits in Internet Explorer 8 and 9 so we need to
// shard style rules into several stylesheets.
// 1. A sheet may contain up to 4095 rules.
// 2. A sheet may @import up to 31 sheets
// See http://bit.ly/mARqBv

var rulesManager = new ReactStyleRulesManager(4095, 31);

/**
 * @param {object} rulesMap
 * @return {ReactStyleRules}
 */
function create(rulesMap) {
  return new ReactStyleRules(rulesMap);
}

/**
 * @param {ReactStyleRules} styleRules
 * @return {object}
 */
function addRules(styleRules) {
  rulesManager.addRules(styleRules);
  return ReactStyle;
}

/**
 * @return {array<object>}
 */
function renderToComponents() {
  return rulesManager.renderToComponents();
}

var ReactStyle = {
  create: create,
  addRules: addRules,
  renderToComponents: renderToComponents
};

module.exports = ReactStyle;
