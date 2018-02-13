import * as FeedActionTypes from '../actionTypes/feed';

const initialState = [
  {
    text: 'Hello World again!',
    time: new Date("Jan 10, 2017 10:15:00"),
  },
  {
    text: 'Hello World',
    time: new Date("Jan 7, 2017 11:13:00"),
  }
];

export default function Feed(state=initialState, action) {
  switch (action.type) {
    case FeedActionTypes.ADD_FEED:
      return [
        {
          text: action.text,
          time: new Date()
        },
        ...state,
      ];

    case FeedActionTypes.REMOVE_FEED:
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index+1)
    ] ;
    default:
      return state;
  }
}
