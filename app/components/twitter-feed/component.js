import Component from '@ember/component';
import faker from 'faker';

const DEFAULT_TWEETS = [
  generateTweet(true),
  generateTweet(true),
  generateTweet(true)
];

function generateTweet(initial=false) {
  return {
    user: {
      avatar_url: faker.internet.avatar(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      user_name: faker.internet.userName()
    },

    text: faker.lorem.sentences(),
    created_at: initial ? faker.date.recent() : Date.now(),
    retweets_count: Math.round(Math.random() * 1000),
    favorites_count: Math.round(Math.random() * 1000)
  };
}

export default Component.extend({
  classNames: ['twitter-feed'],

  tweets: null,

  init() {
    this.set('tweets', DEFAULT_TWEETS);

    this._super(...arguments);
  }
});
