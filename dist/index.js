'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _representySourceTwitterWidgetBase = require('representy-source-twitter-widget-base');

var _representySourceTwitterWidgetBase2 = _interopRequireDefault(_representySourceTwitterWidgetBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <a class="twitter-follow-button"
//     data-size="large"
//     data-show-screen-name="false"
//     data-dnt="true"
//     data-show-count="false"
//   href="https://twitter.com/salimkayabasi">Follow @salimkayabasi
// </a>'

class TwitterFollow extends _representySourceTwitterWidgetBase2.default {
  constructor(options) {
    super('follow-button', options, ['size', 'showScreenName', 'dnt', 'lang', 'showCount']);
  }

  // eslint-disable-next-line class-methods-use-this
  getHref() {
    return 'https://twitter.com/<%= username %>';
  }

  // eslint-disable-next-line class-methods-use-this
  getContent() {
    return 'Follow @<%= username %>';
  }

}

exports.default = TwitterFollow;
exports.Source = TwitterFollow;