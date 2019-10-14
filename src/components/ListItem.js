import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTweet} from '../actions';

class ListItem extends Component {

  render() {
    const{tweetId, tweet} = this.props;
    return (
      <div key="tweetName">
        <h4 color='black'>
          {tweet.fromUserHandle}
        </h4>
        <h4>{tweet.fromUserName}</h4>
        <h4>{tweet.text}</h4>
      </div>
    );
  }
}
export default connect(null, {completeTweet})(ListItem);