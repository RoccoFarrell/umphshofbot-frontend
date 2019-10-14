import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  renderTweet() {
    const {data} = this.props;
    const tweets = _.map(data, (value, key) => {
      return <ListItem key={key} tweetId={key} tweet={value} />;
    });
    if (!_.isEmpty(tweets)) {
      return tweets;
    }
    return (
      <div>
        <h4>You have no tweets!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchTweets();
  }
  render() {
    return (
      <div>
        <div>
          <h1>Tweets:</h1>
          {this.renderTweet()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);