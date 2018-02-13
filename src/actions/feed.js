import * as FeedActionTypes from '../actionTypes/feed';

export const addFeed = text => {
  return {
      type: FeedActionTypes.ADD_FEED,
      text
  };
};

export const removeFeed = index => {
  return {
    type: FeedActionTypes.REMOVE_FEED,
    index
  };
};
