import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import FeedReducer from './reducers/feed';
import './index.css';
import ActivityTimelineApp from './containers/ActivityTimelineApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  FeedReducer
);

ReactDOM.render(
  <Provider store={store}>
    <ActivityTimelineApp />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
