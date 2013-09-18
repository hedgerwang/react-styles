/**
 * @providesModule ReactStyle
 */

var ReactStyleRules = require('ReactStyleRules');
var ReactStyleRulesManager = require('ReactStyleRulesManager');

/**
 * @constructor
 */
function ReactStyle() {
  // Stylesheet has limits in Internet Explorer 8 and 9 so we need to
  // shard style rules into several stylesheets.
  // 1. A sheet may contain up to 4095 rules.
  // 2. A sheet may @import up to 31 sheets
  // See http://bit.ly/mARqBv
  this._rulesManager = new ReactStyleRulesManager(4095, 31);
  this._listenersMap = {};
  this._changeEvent = {target: this, type: 'change'};
}

/**
 * @param {object} rulesMap
 * @return {ReactStyleRules}
 */
ReactStyle.prototype.create = function(rulesMap) {
  return new ReactStyleRules(rulesMap);
};

/**
 * @param {ReactStyleRules} styleRules
 * @return {ReactStyle}
 */
ReactStyle.prototype.addRules = function(styleRules) {
  if (this._rulesManager.addRules(styleRules)) {
    this.dispatchEvent(this._changeEvent);
  }
  return this;
};

/**
 * @return {array<object>}
 */
ReactStyle.prototype.renderToComponents = function() {
  return this._rulesManager.renderToComponents();
};

/**
 * Implements W3C {EventTarget} interface
 * @param {string} type
 * @param {function|EventListener}
 */
ReactStyle.prototype.addEventListener = function(type, listener) {
  var listeners = this._listenersMap[type] || [];
  if (listeners.indexOf(listener) < 0) {
    listeners.push(listener);
  }
  this._listenersMap[type] = listeners;
};

/**
 * Implements W3C {EventTarget} interface
 * @param {string} type
 * @param {function|EventListener}
 */
ReactStyle.prototype.removeEventListener = function(type, listener) {
  var listeners = this._listenersMap[type];
  if (listeners) {
    var idx = listeners.indexOf(listener);
    if (idx > -1) {
      listener.splice(listener);
    }
  }
};

/**
 * Implements W3C {EventTarget} interface
 * @param {object} evt
 * @return {boolean}
 */
ReactStyle.prototype.dispatchEvent = function(evt) {
  var type = evt.type;
  var listeners = this._listenersMap[type];
  if (listeners) {
    for (var i = 0, j = listeners.length; i < j; i++) {
      var handler = listeners[i];
      if (handler.handleEvent) {
        handler.handleEvent.call(this, evt);
      } else {
        handler.call(this, evt);
      }
    }
  }
  return true;
};


// Export the singleton instance.
module.exports = new ReactStyle();
