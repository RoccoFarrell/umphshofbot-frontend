import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTweet} from '../actions';

class ListItem extends Component {
  handleComplete = completeTweet => {
    let {completeTweet2} = this.props;
    completeTweet(completeTweet2);
  };
  render() {
    const{tweetId, tweet} = this.props;
    return (
      <div key="tweetName">
        <h4>
          {tweet.title}
          <span onClick={() => this.handleComplete(tweetId)}>
            <i>Done</i>
          </span>
        </h4>
      </div>
    );
  }
}
export default connect(null, {completeTweet})(ListItem);