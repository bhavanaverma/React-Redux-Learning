import React from 'react';
import ReactDOM from 'react-dom';
import ActivityTimelineApp from './containers/ActivityTimelineApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActivityTimelineApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
