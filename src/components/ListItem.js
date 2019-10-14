import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTweet} from '../actions';
import { Feed, Icon } from 'semantic-ui-react'

class ListItem extends Component {

  processDate(date) {
    let parsedDate = new Date(date)
    let today = new Date()
    let num = today - parsedDate
    console.log('diff: ', num)
    return date
  }
  randomizeAvatar() {
    let names = ['elliot','helen', 'jenny', 'joe', 'justen']
    var name = names[Math.floor(Math.random()*names.length)];
    return 'https://react.semantic-ui.com/images/avatar/small/' + name + '.jpg' 
  }
  render() {
    const{tweet} = this.props;
    return (
      <Feed.Event>
        <Feed.Label>
          <img src={this.randomizeAvatar()} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>@{tweet.fromUserHandle}</Feed.User> voted for a song.
            <Feed.Date>{this.processDate(tweet.date)}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            {tweet.text.replace('@UmphsHOFBot','')}
          </Feed.Extra>
          <Feed.Meta text>
            Tweet @umphshofbot to vote!
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default ListItem