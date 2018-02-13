import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators} from 'redux';
import * as FeedActionCreators from '../actions/feed'
import { connect } from 'react-redux';
import Header from '../components/Header';
import ActivityFeed from '../components/ActivityFeed';
import AddCommentForm from '../components/AddCommentForm';

//Container
class ActivityTimelineApp extends Component {

  static propTypes = {
    feeds: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, feeds } = this.props;
    const addFeed = bindActionCreators(FeedActionCreators.addFeed, dispatch);
    const removeFeed = bindActionCreators(FeedActionCreators.removeFeed, dispatch);

    const feedComponents = feeds.map((feed, index) => (
        <ActivityFeed
          index={index}
          key={index}
          text={feed.text}
          time={feed.time}
          removeFeed={removeFeed}
        />
    ));

    return (
      <div className="App">
        <Header title="Your social media activities" />
        <AddCommentForm addFeed={addFeed} />
        <div className="activityfeedsdisplay">
          <h2>Your Activity Timeline</h2>
          <div className="activityfeeds">
            {feedComponents}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    feeds: state
  }
);

export default connect(mapStateToProps)(ActivityTimelineApp);
