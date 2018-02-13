import React, { Component } from 'react';

//Logical component - maintains its own state and does not have any dependency
export default class AddCommentForm extends Component {
  static propTypes: {
    addFeed: PropTypes.func.isRequired,
  };

  state = {
    comment: ''
  };

  handleFeedInput = e => {
    this.setState({
      comment: e.target.value
    });
  };

  addFeed = (e) => {
    if (e) e.preventDefault();
    this.props.addFeed(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
    <form onSubmit={this.addFeed}>
        <textarea
          rows="4"
          cols="10"
          onChange={this.handleFeedInput}
          value={this.state.comment}
          placeholder="What's happening?" />
        <button
          type="submit"
          name="submit"
          value="submit"
          disabled={!this.state.comment}> Done
       </button>
    </form>
  )};
}
