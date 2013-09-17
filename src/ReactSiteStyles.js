/**
 * @providesModule ReactSiteStyles
 */


var ReactStyles = require('ReactStyles');

// Stylesheet has limits in Internet Explorer 8 and 9 so we need to
// shard style rules into several stylesheets.
// 1. A sheet may contain up to 4095 rules.
// 2. A sheet may @import up to 31 sheets
// See http://bit.ly/mARqBv

module.exports = new ReactStyles(4095, 31);
