import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { Feed, Icon } from 'semantic-ui-react'
import ListItem from './ListItem';

class List extends Component {
  renderTweet() {
    const {data} = this.props;
    console.log(data)
    // const tweets = _.map(data, (value, key) => {
    //   return <ListItem key={key} tweetId={key} tweet={value} />;
    // });

    const tweets = data['tweets'].map((value) =>
      <ListItem tweet={value}></ListItem>
    );

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
        <Feed>
          {this.renderTweet()}
        </Feed>
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