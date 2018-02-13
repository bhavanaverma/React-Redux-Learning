import React from 'react';
import PropTypes from 'prop-types';

//Pure component - doesn't need any state
const ActivityFeed = props => {
  return (
    <div className="feeddetail">
      <a className="removefeed" onClick={ () => props.removeFeed(props.index)}>x
        <span class="tooltiptext">Delete Feed</span>
      </a>
      <div className="activityfeed">
        {props.text}
      </div>
      <div className="activitytimeline">
        {props.time.toLocaleString()}
      </div>
    </div>
)};

ActivityFeed.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.Date,
  removeFeed: PropTypes.func.isRequired
}
export default ActivityFeed;
