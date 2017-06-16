import TwitterWidgetBase from 'representy-source-twitter-widget-base';

// <a class="twitter-follow-button"
//     data-size="large"
//     data-show-screen-name="false"
//     data-dnt="true"
//     data-show-count="false"
//   href="https://twitter.com/salimkayabasi">Follow @salimkayabasi
// </a>'

class TwitterFollow extends TwitterWidgetBase {
  constructor(options) {
    super('follow-button', options, [
      'size',
      'showScreenName',
      'dnt',
      'lang',
      'showCount',
    ]);
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

export default TwitterFollow;
export { TwitterFollow as Source };
