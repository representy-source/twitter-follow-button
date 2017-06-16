import TwitterTimeline from '../src/';

describe('TwitterTimeline', () => {
  test('load', async () => {
    const timeline = new TwitterTimeline(
      {
        username: 'salimkayabasi',
        size: 'large',
        showScreenName: false,
        dnt: true,
        lang: 'tr',
        showCount: 'false',
      });
    const result = await timeline.load();
    expect(result).toEqual(expect.stringContaining('class="twitter-follow-button"'));
    expect(result).toEqual(expect.stringContaining('data-size="large"'));
    expect(result).toEqual(expect.stringContaining('data-show-screen-name="false"'));
    expect(result).toEqual(expect.stringContaining('data-dnt="true"'));
    expect(result).toEqual(expect.stringContaining('data-show-count="false"'));
    expect(result).toEqual(expect.stringContaining('https://twitter.com/salimkayabasi'));
    expect(result).toEqual(expect.stringContaining('Follow @salimkayabasi'));
  });
});
