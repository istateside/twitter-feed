import Component from '@ember/component';
import { get, computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  classNames: ['tweet-card'],

  avatarUrl: computed.reads('tweet.user.avatar_url'),
  tweetText: computed.reads('tweet.text'),
  fullName: computed.reads('tweet.user.full_name'),
  userName: computed.reads('tweet.user.user_name'),
  retweets: computed.reads('tweet.retweets_count'),
  favorites: computed.reads('tweet.favorites_count'),

  timeSincePosting: computed('tweet.created_at', function() {
    return moment(get(this, 'tweet.created_at')).fromNow();
  })
});

